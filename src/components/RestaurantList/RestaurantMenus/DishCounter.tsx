import type { TDish } from "../restaurantTypes.ts";
import { Counter } from "../../UI/Counter/UICounter.tsx";
import { useAppDispatch, useAppSelector } from "../../../store/hooks.ts";
import {
	addToCart,
	removeFromCart,
	selectAmountById,
} from "../../../store/entities/cart/slice.ts";
import styles from "./DishCounter.module.css";

export const DishCounter = ({ menuItem }: { menuItem: TDish }) => {
	const dispatch = useAppDispatch();
	const amount = useAppSelector((state) =>
		selectAmountById(state, menuItem.id),
	);

	const handleChange = (nextAmount: number) => {
		if (nextAmount > amount) {
			dispatch(addToCart(menuItem.id));
			return;
		}

		if (nextAmount < amount) {
			dispatch(removeFromCart(menuItem.id));
		}
	};

	return (
		<div className={styles.counter}>
			<span className={styles.price}>{menuItem.price * amount} ₽</span>
			<Counter count={amount} onChange={handleChange} />
		</div>
	);
};
