import type { TMenuItem } from "../restaurantTypes.ts";
import { MenuItem } from "./MenuItem.tsx";
import styles from "./Menus.module.css";

export const Menus = ({ menu }: { menu: TMenuItem[] }) => {
	return (
		<div className={styles.section}>
			<h3 className={styles.title}>Menu</h3>
			<ul className={styles.list}>
				{menu.map((menuItem: TMenuItem) => (
					<MenuItem key={menuItem.id} menuItem={menuItem} />
				))}
			</ul>
		</div>
	);
};
