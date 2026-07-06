import { useState } from "react";
import { restaurants } from "../../mock/restaurantsList.ts";
import { RestaurantItem } from "./RestaurantItem/RestaurantItem.tsx";
import { RestaurantTabs } from "./RestaurantTabs/RestaurantTabs.tsx";
import type { TRestaurant } from "./restaurantTypes.ts";

export const RestaurantsPage = () => {
	const firstRestaurant = restaurants[0] || null;
	const [currentRestaurant, setCurrentRestaurant] = useState<TRestaurant | null>(firstRestaurant);

	return (
		<div>
			<h1>Current Restaurant</h1>
			<RestaurantTabs
			    restaurants={restaurants}
				activeRestaurantId={currentRestaurant?.id}
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					gap: "10px"
				}}
				onChange={setCurrentRestaurant}
			/>
			{currentRestaurant && <RestaurantItem restaurant={currentRestaurant}/>}
		</div>
	);
};