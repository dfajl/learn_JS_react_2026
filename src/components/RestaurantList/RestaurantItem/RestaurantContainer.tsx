import { RestaurantItem } from "./RestaurantItem.tsx";
import { useParams } from "react-router-dom";
import { useGetRestaurantByIdQuery } from "../../../store/services/restaurantsApi.ts";
import { skipToken } from "@reduxjs/toolkit/query";

export const RestaurantContainer = () => {
	const { id = "" } = useParams();

	// вариант получения данных из redux store
	/* const restaurant = useAppSelector((state) => selectRestaurantById(state, id)); */

	const {
		data: restaurant,
		isLoading,
		isError,
		error,
	} = useGetRestaurantByIdQuery(id || skipToken);

	const errorMessage =
		typeof error === "object" && error !== null && "status" in error
			? `Request failed (${String(error.status)})`
			: "Failed to load restaurant";

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (isError) {
		return <div>Error: {errorMessage}</div>;
	}

	if (!restaurant) {
		return null;
	}

	return <RestaurantItem restaurant={restaurant} />;
};
