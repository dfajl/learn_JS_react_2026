import {
	createSlice,
	createSelector,
	type PayloadAction,
} from "@reduxjs/toolkit";

type TCartState = Record<string, number>;

const initialState: TCartState = {};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, { payload }: PayloadAction<string>) => {
			state[payload] = (state[payload] || 0) + 1;
		},
		removeFromCart: (state, { payload }: PayloadAction<string>) => {
			if (!state[payload]) {
				return;
			}

			state[payload] -= 1;

			if (state[payload] === 0) {
				delete state[payload];
			}
		},
	},
	selectors: {
		selectCartItems: createSelector(
			[(state: TCartState) => state],
			(cart) =>
				Object.keys(cart).map((id) => ({
					id,
					amount: cart[id],
				})),
		),
		selectAmountById: (state, id: string) => state[id] || 0,
	},
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export const { selectCartItems, selectAmountById } = cartSlice.selectors;
