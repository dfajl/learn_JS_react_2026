import {
	createAsyncThunk,
	createEntityAdapter,
	createSlice,
} from "@reduxjs/toolkit";
import type { TRestaurant } from "../../../components/RestaurantList/restaurantTypes.ts";
import type { RootState } from "../../redux.ts";

const restaurantAdapter = createEntityAdapter<TRestaurant>();

export const fetchRestaurants = createAsyncThunk<
	TRestaurant[],
	void,
	{ rejectValue: string }
>("restaurant/fetchRestaurants", async (_, thunkApi) => {
	try {
		const response = await fetch("/api/restaurants");

		if (!response.ok) {
			throw new Error("Failed to fetch restaurants");
		}

		return (await response.json()) as TRestaurant[];
	} catch (error) {
		const message =
			error instanceof Error ? error.message : "Unknown request error";

		return thunkApi.rejectWithValue(message);
	}
});

const initialState = restaurantAdapter.getInitialState({
	status: "idle" as "idle" | "pending" | "fulfilled" | "rejected",
	error: null as string | null,
});

export const restaurantSlice = createSlice({
	name: "restaurant",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchRestaurants.pending, (state) => {
				state.status = "pending";
				state.error = null;
			})
			.addCase(fetchRestaurants.fulfilled, (state, action) => {
				state.status = "fulfilled";
				restaurantAdapter.setAll(state, action.payload);
			})
			.addCase(fetchRestaurants.rejected, (state, action) => {
				state.status = "rejected";
				state.error = action.payload ?? "Failed to fetch restaurants";
			});
	},
});

const restaurantSelectors = restaurantAdapter.getSelectors<RootState>(
	(state) => state.restaurant,
);

export const {
	selectById: selectRestaurantById,
	selectIds: selectRestaurantIds,
} = restaurantSelectors;

export const selectRestaurantsStatus = (state: RootState) =>
	state.restaurant.status;

export const selectRestaurantsError = (state: RootState) =>
	state.restaurant.error;
