import { useParams } from "react-router-dom";
import { useAppSelector } from "../../store/hooks.ts";
import { selectRestaurantById } from "../../store/entities/restaurant/slice.ts";
import { Reviews } from "../../components/RestaurantList/RestaurantReviews/Rewievs.tsx";

export const RestaurantReviewsPage = () => {
	const { id = "" } = useParams();
	const restaurant = useAppSelector((state) =>
		selectRestaurantById(state, id),
	);

	if (!restaurant) {
		return null;
	}

	return <Reviews reviewIds={restaurant.reviews} />;
};
