import type { TRestaurant } from "../restaurantTypes.ts";
import { Menus } from "../RestaurantMenus/Menus.tsx";
import { Reviews } from "../RestaurantReviews/Rewievs.tsx";
import styles from "./RestaurantItem.module.css";

export const RestaurantItem = ({ restaurant }: { restaurant: TRestaurant }) => {
	return (
		<div className={styles.restaurant}>
			<h2 className={styles.name}>Name: {restaurant.name}</h2>
			<Menus menu={restaurant.menu} />
			<Reviews reviews={restaurant.reviews} />
		</div>
	);
};
