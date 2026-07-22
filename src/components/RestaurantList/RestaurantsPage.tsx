// import { useState } from "react";
import { Tabs } from "../UI/Tabs/Tabs.tsx";
// import { RestaurantContainer } from "./RestaurantItem/RestaurantContainer.tsx";
import { useAppSelector } from "../../store/hooks.ts";
import { selectRestaurantIds } from "../../store/entities/restaurant/slice.ts";
import styles from "./RestaurantsPage.module.css";

export const RestaurantsPage = () => {
	const restaurantIds = useAppSelector(selectRestaurantIds);

	// const [activeRestaurantId, setActiveRestaurantId] = useState<string | null>(
	// 	() => restaurantIds[0] ?? null,
	// );

	// const handleSetActiveRestaurantId = (restaurantId: string) => {
	// 	if (activeRestaurantId === restaurantId) {
	// 		return;
	// 	}

	// 	setActiveRestaurantId(restaurantId);
	// };

	return (
		<div className={styles.page}>
			<h1 className={styles.title}>Restaurants</h1>
			{/* <Tabs
				itemIds={restaurantIds}
				activeId={activeRestaurantId}
				onChange={handleSetActiveRestaurantId}
			/> */}
			{/* {activeRestaurantId && (
				<RestaurantContainer id={activeRestaurantId} />
			)} */}
			<Tabs itemIds={restaurantIds} direction="column" />
		</div>
	);
};
