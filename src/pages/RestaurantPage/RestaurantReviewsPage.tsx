import { useParams } from "react-router-dom";
import { skipToken } from "@reduxjs/toolkit/query/react";
import { Reviews } from "../../components/RestaurantList/RestaurantReviews/Rewievs.tsx";
import { useGetReviewsQuery } from "../../store/services/reviewsApi.ts";
import { useGetClientsQuery } from "../../store/services/clientsApi.ts";

export const RestaurantReviewsPage = () => {
	const { id = "" } = useParams();

	const {
		data: reviews,
		isLoading: isReviewsLoading,
		isError: isReviewsError,
		error: reviewsError,
	} = useGetReviewsQuery(id || skipToken);

	const {
		data: clients,
		isLoading: isClientsLoading,
		isError: isClientsError,
		error: clientsError,
	} = useGetClientsQuery();

	if (isReviewsLoading || isClientsLoading) {
		return <div>Loading...</div>;
	}

	const error = reviewsError ?? clientsError;
	const errorMessage =
		typeof error === "object" && error !== null && "status" in error
			? `Request failed (${String(error.status)})`
			: "Failed to load reviews";

	if (isReviewsError || isClientsError) {
		return <div>Error: {errorMessage}</div>;
	}

	if (!reviews || reviews.length === 0) {
		return <div>No reviews found</div>;
	}

	const clientsById = Object.fromEntries(
		(clients ?? []).map((client) => [client.id, client.name]),
	);

	return <Reviews reviews={reviews} clientsById={clientsById} />;
};
