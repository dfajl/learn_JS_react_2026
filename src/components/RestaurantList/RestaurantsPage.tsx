import { useState } from "react";
import { restaurants } from "../../mock/restaurantsList.ts";
import { Tabs } from "../UI/Tabs/Tabs.tsx";
import { RestaurantItem } from "./RestaurantItem/RestaurantItem.tsx";
import type { TRestaurant } from "./restaurantTypes.ts";
import styles from "./RestaurantsPage.module.css";

export const RestaurantsPage = () => {
	const [activeRestaurantId, setActiveRestaurantId] = useState<string | null>(
		() => restaurants[0]?.id ?? null,
	);

	const currentRestaurant: TRestaurant | null =
		restaurants.find(({ id }) => id === activeRestaurantId) ?? null;

	const restaurantTabs = restaurants.map(({ id, name }) => ({
		id,
		label: name,
	}));

	const handleSetActiveRestaurantId = (restaurantId: string) => {
		if (activeRestaurantId === restaurantId) {
			return;
		}

		setActiveRestaurantId(restaurantId);
	};

	return (
		<div className={styles.page}>
			<h1 className={styles.title}>Current Restaurant</h1>
			<Tabs
				items={restaurantTabs}
				activeId={activeRestaurantId}
				onChange={handleSetActiveRestaurantId}
			/>
			{currentRestaurant && <RestaurantItem restaurant={currentRestaurant} />}
		</div>
	);
};
