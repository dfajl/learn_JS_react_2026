import { MenuItemContainer } from "./MenuItemContainer.tsx";
import styles from "./Menus.module.css";

export const Menus = ({ menuIds, restaurantId }: { menuIds: string[], restaurantId: string }) => {
	return (
		<div className={styles.section}>
			<h3 className={styles.title}>Menu</h3>
			<ul className={styles.list}>
				{menuIds.map((menuId) => (
					<MenuItemContainer key={menuId} menuId={menuId} restaurantId={restaurantId} />
				))}
			</ul>
		</div>
	);
};
