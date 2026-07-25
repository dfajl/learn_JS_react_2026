import type { TDish } from "../restaurantTypes.ts";
import { useUser } from "../../Providers/UserProvider";
import { DishCounter } from "./DishCounter.tsx";
import styles from "./MenuItem.module.css";

export const MenuItem = ({ menuItem }: { menuItem: TDish }) => {
	const { user } = useUser();

	return (
		<article className={styles.card}>
			<h2 className={styles.name}>{menuItem.name}</h2>
			<p className={styles.price}>${menuItem.price}</p>
			<p className={styles.ingredients}>
				{menuItem.ingredients.join(", ")}
			</p>
			{user && (
				<div className={styles.counter}>
					<DishCounter menuItem={menuItem} />
				</div>
			)}
		</article>
	);
};
