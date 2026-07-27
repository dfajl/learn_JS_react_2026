import { NavLink, Outlet } from "react-router-dom";
import cn from "classnames";
import type { TRestaurant } from "../restaurantTypes.ts";
import styles from "./RestaurantItem.module.css";

const LINKS = [
	{ to: "menu", label: "Menu" },
	{ to: "reviews", label: "Reviews" },
] as const;

export const RestaurantItem = ({ restaurant }: { restaurant: TRestaurant }) => {
	return (
		<div className={styles.restaurant}>
			<h2 className={styles.name}>Name: {restaurant.name}</h2>
			<nav className={styles.nav}>
				{LINKS.map(({ to, label }) => (
					<NavLink
						key={to}
						to={to}
						className={({ isActive }) =>
							cn(styles.link, { [styles.active]: isActive })
						}
					>
						{label}
					</NavLink>
				))}
			</nav>
			<Outlet />
		</div>
	);
};
