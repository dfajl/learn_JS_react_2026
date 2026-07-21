import { createSlice } from "@reduxjs/toolkit";
import { normalizedRestaurants } from "../../../mock/normilized-mock.ts";
import type { TRestaurant } from "../../../components/RestaurantList/restaurantTypes.ts";
import { createEntitiesState } from "../../utils/createEntitiesState.ts";

const initialState = createEntitiesState<TRestaurant>(normalizedRestaurants);

export const restaurantSlice = createSlice({
	name: "restaurant",
	initialState,
	reducers: {},
	selectors: {
		selectRestaurantById: (state, id: string) => state.entities[id],
		selectRestaurantIds: (state) => state.ids,
	},
});

export const { selectRestaurantById, selectRestaurantIds } =
	restaurantSlice.selectors;
