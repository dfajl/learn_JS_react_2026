import { createSlice } from "@reduxjs/toolkit";
import { normalizedReviews } from "../../../mock/normilized-mock.ts";
import type { TReview } from "../../../components/RestaurantList/restaurantTypes.ts";
import { createEntitiesState } from "../../utils/createEntitiesState.ts";

const initialState = createEntitiesState<TReview>(normalizedReviews);

export const reviewSlice = createSlice({
	name: "review",
	initialState,
	reducers: {},
	selectors: {
		selectReviewById: (state, id: string) => state.entities[id],
		selectReviewIds: (state) => state.ids,
	},
});

export const { selectReviewById, selectReviewIds } = reviewSlice.selectors;
