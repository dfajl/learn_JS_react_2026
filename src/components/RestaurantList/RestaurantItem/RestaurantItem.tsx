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
		<article className={styles.restaurant}>
			<div className={styles.hero}>
				<img
					src={restaurant.img}
					alt={restaurant.name}
					className={styles.image}
				/>
				<div className={styles.meta}>
					<h2 className={styles.name}>{restaurant.name}</h2>
					<p className={styles.description}>{restaurant.description}</p>
				</div>
			</div>
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
		</article>
	);
};
