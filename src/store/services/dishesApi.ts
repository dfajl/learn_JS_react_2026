import { api } from "./api.ts";
import type { TDish } from "../../components/RestaurantList/restaurantTypes.ts";

export const dishesApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getDishes: builder.query<TDish[], string>({
			query: (restaurantId) => ({
				url: "/dishes",
				params: { restaurantId },
			  }),
			providesTags: (_result, _error, restaurantId) => [
				{ type: "Dish", id: restaurantId },
			],
		}),
		/* getDishById: builder.query<TDish, string>({
			query: (id) => `/dish/${id}`,
			providesTags: (_result, _error, id) => [{ type: "Dish", id }],
		}), */
	}),
});

export const { useGetDishesQuery } = dishesApi;
