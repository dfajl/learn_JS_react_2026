import { useAppSelector } from "../../../store/hooks.ts";
import { selectRestaurantById } from "../../../store/entities/restaurant/slice.ts";
import { RestaurantItem } from "./RestaurantItem.tsx";

export const RestaurantContainer = ({ id }: { id: string }) => {
	const restaurant = useAppSelector((state) => selectRestaurantById(state, id));

	if (!restaurant) {
		return null;
	}

	return <RestaurantItem restaurant={restaurant} />;
};
