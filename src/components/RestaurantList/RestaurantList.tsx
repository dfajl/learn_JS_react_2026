import { restaurants } from "../../mock/restaurantsList.js";
import { RestaurantItem } from "./RestaurantItem/RestaurantItem.tsx";
import type { TRestaurant } from "./types.ts";

export const RestaurantList = () => {
	return (
		<div>
			<h1>Restaurants List</h1>
			<ul>
				{restaurants.map((restaurant: TRestaurant) => (
					<RestaurantItem
						key={restaurant.id}
						restaurant={restaurant}
					/>
				))}
			</ul>
		</div>
	);
};