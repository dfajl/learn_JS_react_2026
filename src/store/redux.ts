import { configureStore } from "@reduxjs/toolkit";
import { restaurantSlice } from "./entities/restaurant/slice.ts";
import { dishSlice } from "./entities/dish/slice.ts";
import { reviewSlice } from "./entities/review/slice.ts";
import { userSlice } from "./entities/user/slice.ts";
import { cartSlice } from "./entities/cart/slice.ts";
import { api } from "./services/api.ts";

export const store = configureStore({
	reducer: {
		[restaurantSlice.name]: restaurantSlice.reducer,
		[dishSlice.name]: dishSlice.reducer,
		[reviewSlice.name]: reviewSlice.reducer,
		[userSlice.name]: userSlice.reducer,
		[cartSlice.name]: cartSlice.reducer,
		[api.reducerPath]: api.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
