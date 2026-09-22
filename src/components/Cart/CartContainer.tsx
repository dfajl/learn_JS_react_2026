import { selectCartItems } from "../../store/entities/cart/slice.ts";
import { useAppSelector } from "../../store/hooks.ts";
import { Cart } from "./Cart.tsx";

export const CartContainer = () => {
	const items = useAppSelector(selectCartItems);

	return <Cart items={items} />;
};
