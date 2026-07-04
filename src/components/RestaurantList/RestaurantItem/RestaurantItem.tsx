import type { TRestaurant } from "../types.ts";
import { Menus } from "../RestaurantMenus/Menus.tsx";
import { Reviews } from "../RestaurantReviews/Rewievs.tsx";

export const RestaurantItem = ({ restaurant }: { restaurant: TRestaurant }) => {
	return (
		<div>
			<h2 style={{ textDecoration: "underline" }}>
				Name: {restaurant.name}
			</h2>
			<Menus menu={restaurant.menu} />
			<Reviews reviews={restaurant.reviews} />
		</div>
	);
};