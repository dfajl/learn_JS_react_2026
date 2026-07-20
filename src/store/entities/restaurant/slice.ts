import { createSlice, createSelector } from "@reduxjs/toolkit";
import { normalizedRestaurants } from "../../../mock/normilized-mock.ts";
import type {
	TEntitiesState,
	TRestaurant,
} from "../../../components/RestaurantList/restaurantTypes.ts";
import { createEntitiesState } from "../../utils/createEntitiesState.ts";

const initialState = createEntitiesState<TRestaurant>(normalizedRestaurants);

export const restaurantSlice = createSlice({
	name: "restaurant",
	initialState,
	reducers: {},
	selectors: {
		selectRestaurantById: (state, id: string) => state.entities[id],
		selectRestaurantIds: (state) => state.ids,
		selectRestaurants: createSelector(
			[
				(state: TEntitiesState<TRestaurant>) => state.ids,
				(state: TEntitiesState<TRestaurant>) => state.entities,
			],
			(ids, entities) =>
				ids
					.map((id) => entities[id])
					.filter((restaurant): restaurant is TRestaurant =>
						Boolean(restaurant),
					),
		),
	},
});

export const {
	selectRestaurantById,
	selectRestaurantIds,
	selectRestaurants,
} = restaurantSlice.selectors;
