import { useAppSelector } from "../../store/hooks.ts";
import { selectCartItems } from "../../store/entities/cart/slice.ts";
import { Cart } from "./Cart.tsx";
import type { TCartListItem } from "./types.ts";

export const CartContainer = () => {
	const cartItems = useAppSelector(selectCartItems);
	const dishEntities = useAppSelector((state) => state.dish.entities);

	const items: TCartListItem[] = cartItems.flatMap(({ id, amount }) => {
		const dish = dishEntities[id];

		if (!dish) {
			return [];
		}

		return [
			{
				id,
				name: dish.name,
				amount,
				price: dish.price,
			},
		];
	});

	return <Cart items={items} />;
};
