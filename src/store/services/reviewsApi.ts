import { api } from "./api.ts";
import type { TReview } from "../../components/RestaurantList/restaurantTypes.ts";

export const reviewsApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getReviews: builder.query<TReview[], string>({
			query: (restaurantId) => ({
				url: "/reviews",
				params: { restaurantId },
			}),
			providesTags: (_result, _error, restaurantId) => [
				{ type: "Review", id: restaurantId },
			],
		}),
	}),
});

export const { useGetReviewsQuery } = reviewsApi;
