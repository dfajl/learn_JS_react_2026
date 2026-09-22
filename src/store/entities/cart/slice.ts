import {
	createSlice,
	createSelector,
	type PayloadAction,
} from "@reduxjs/toolkit";
import type { TDish } from "../../../components/RestaurantList/restaurantTypes.ts";
import type { TCartListItem } from "../../../components/Cart/types.ts";

type TCartDish = Pick<TDish, "id" | "name" | "price">;
type TCartState = Record<string, { dish: TCartDish; amount: number }>;

const initialState: TCartState = {};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, { payload }: PayloadAction<TCartDish>) => {
			const item = state[payload.id];

			if (item) {
				item.amount += 1;
				return;
			}

			state[payload.id] = { dish: payload, amount: 1 };
		},
		removeFromCart: (state, { payload }: PayloadAction<string>) => {
			const item = state[payload];

			if (!item) {
				return;
			}

			item.amount -= 1;

			if (item.amount === 0) {
				delete state[payload];
			}
		},
	},
	selectors: {
		selectCartItems: createSelector(
			[(state: TCartState) => state],
			(cart): TCartListItem[] =>
				Object.values(cart).map(({ dish, amount }) => ({
					...dish,
					amount,
				})),
		),
		selectAmountById: (state, id: string) => state[id]?.amount ?? 0,
	},
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export const { selectCartItems, selectAmountById } = cartSlice.selectors;
