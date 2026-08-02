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
		addReview: builder.mutation<
			TReview,
			{ restaurantId: string; review: Omit<TReview, "id"> }
		>({
			query: ({ restaurantId, review }) => ({
				url: `/review/${restaurantId}`,
				method: "POST",
				body: review,
			}),
			invalidatesTags: (_result, _error, { restaurantId }) => [
				{ type: "Review", id: restaurantId },
			],
		}),
		updateReview: builder.mutation<
			TReview,
			{
				reviewId: string;
				restaurantId: string;
				review: Partial<Omit<TReview, "id">>;
			}
		>({
			query: ({ reviewId, review }) => ({
				url: `/review/${reviewId}`,
				method: "PATCH",
				body: review,
			}),
			invalidatesTags: (_result, _error, { restaurantId }) => [
				{ type: "Review", id: restaurantId },
			],
		}),
	}),
});

export const {
	useGetReviewsQuery,
	useAddReviewMutation,
	useUpdateReviewMutation,
} = reviewsApi;
