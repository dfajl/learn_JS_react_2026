import { restaurants } from "../../mock/restaurantsList.js";
import { RestaurantItem } from "./RestaurantItem/RestaurantItem.tsx";
import type { Restaurant } from "./types.ts";

export const RestaurantList = () => {
	return (
		<div>
			<h1>Restaurants List</h1>
			<ul>
				{restaurants.map((restaurant: Restaurant) => (
					<RestaurantItem
						key={restaurant.id}
						restaurant={restaurant}
					/>
				))}
			</ul>
		</div>
	);
};