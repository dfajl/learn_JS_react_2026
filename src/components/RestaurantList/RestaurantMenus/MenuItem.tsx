import type { TMenuItem } from "../restaurantTypes.ts";
import { DishCounter } from "./DishCounter.tsx";
import styles from "./MenuItem.module.css";

export const MenuItem = ({ menuItem }: { menuItem: TMenuItem }) => {
	return (
		<li className={styles.item}>
			<span className={styles.name}>{menuItem.name}</span>
			<DishCounter menuItem={menuItem} />
		</li>
	);
};
