import { useState } from "react";
import { Tabs } from "../UI/Tabs/Tabs.tsx";
import { RestaurantContainer } from "./RestaurantItem/RestaurantContainer.tsx";
import { useAppSelector } from "../../store/hooks.ts";
import {
	selectRestaurantIds,
	selectRestaurants,
} from "../../store/entities/restaurant/slice.ts";
import styles from "./RestaurantsPage.module.css";

export const RestaurantsPage = () => {
	const restaurantIds = useAppSelector(selectRestaurantIds);
	const restaurants = useAppSelector(selectRestaurants);

	const [activeRestaurantId, setActiveRestaurantId] = useState<string | null>(
		() => restaurantIds[0] ?? null,
	);

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
			{activeRestaurantId && (
				<RestaurantContainer id={activeRestaurantId} />
			)}
		</div>
	);
};
