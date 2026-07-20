import { useState } from "react";
import type { TDish } from "../restaurantTypes.ts";
import { Counter } from "../../UI/Counter/UICounter.tsx";
import styles from "./DishCounter.module.css";

export const DishCounter = ({ menuItem }: { menuItem: TDish }) => {
	const [count, setCount] = useState(0);

	return (
		<div className={styles.counter}>
			<span className={styles.price}>{menuItem.price * count} ₽</span>
			<Counter count={count} onChange={setCount} />
		</div>
	);
};
