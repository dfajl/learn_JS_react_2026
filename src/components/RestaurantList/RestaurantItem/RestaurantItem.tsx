import type { TRestaurant } from "../restaurantTypes.ts";
import { Menus } from "../RestaurantMenus/Menus.tsx";
import { Reviews } from "../RestaurantReviews/Rewievs.tsx";

export const RestaurantItem = ({ restaurant }: { restaurant: TRestaurant }) => {
	return (
		<div>
			<h2 style={{ textDecoration: "underline" }}>
				Name: {restaurant.name}
			</h2>
			<Menus menu={restaurant.menu}  style={{ fontSize: "20px" }}/>
			<Reviews reviews={restaurant.reviews} style={{ fontSize: "20px" }}/>
		</div>
	);
};