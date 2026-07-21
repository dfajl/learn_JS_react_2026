import { MenuItemContainer } from "./MenuItemContainer.tsx";
import styles from "./Menus.module.css";

export const Menus = ({ menuIds }: { menuIds: string[] }) => {
	return (
		<div className={styles.section}>
			<h3 className={styles.title}>Menu</h3>
			<ul className={styles.list}>
				{menuIds.map((id) => (
					<MenuItemContainer key={id} id={id} />
				))}
			</ul>
		</div>
	);
};
