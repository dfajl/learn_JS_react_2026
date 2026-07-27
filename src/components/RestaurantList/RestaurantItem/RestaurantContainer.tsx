import { useAppSelector } from "../../../store/hooks.ts";
import { selectRestaurantById } from "../../../store/entities/restaurant/slice.ts";
import { RestaurantItem } from "./RestaurantItem.tsx";
import { useParams } from "react-router-dom";

export const RestaurantContainer = () => {
	const { id = "" } = useParams();

	const restaurant = useAppSelector((state) => selectRestaurantById(state, id));

	if (!restaurant) {
		return null;
	}

	return <RestaurantItem restaurant={restaurant} />;
};
