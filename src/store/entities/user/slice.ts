import { createSlice } from "@reduxjs/toolkit";
import { normalizedUsers } from "../../../mock/normilized-mock.ts";
import type { TUser } from "../../../components/RestaurantList/restaurantTypes.ts";
import { createEntitiesState } from "../../utils/createEntitiesState.ts";

const initialState = createEntitiesState<TUser>(normalizedUsers);

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {},
	selectors: {
		selectUserById: (state, id: string) => state.entities[id],
		selectUserIds: (state) => state.ids,
	},
});

export const { selectUserById, selectUserIds } = userSlice.selectors;
