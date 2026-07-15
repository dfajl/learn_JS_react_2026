import type { TMenuItem } from "../restaurantTypes.ts";
import { useUser } from "../../Providers/UserProvider";
import { DishCounter } from "./DishCounter.tsx";
import styles from "./MenuItem.module.css";

export const MenuItem = ({ menuItem }: { menuItem: TMenuItem }) => {
	const { user } = useUser();

	return (
		<li className={styles.item}>
			<span className={styles.name}>{menuItem.name}</span>
			{user && <DishCounter menuItem={menuItem} />}
		</li>
	);
};
