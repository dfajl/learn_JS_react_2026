import { createSlice } from "@reduxjs/toolkit";
import { normalizedDishes } from "../../../mock/normilized-mock.ts";
import type { TDish } from "../../../components/RestaurantList/restaurantTypes.ts";
import { createEntitiesState } from "../../utils/createEntitiesState.ts";

const initialState = createEntitiesState<TDish>(normalizedDishes);

export const dishSlice = createSlice({
	name: "dish",
	initialState,
	reducers: {},
	selectors: {
		selectDishById: (state, id: string) => state.entities[id],
		selectDishIds: (state) => state.ids,
	},
});

export const { selectDishById, selectDishIds } = dishSlice.selectors;
