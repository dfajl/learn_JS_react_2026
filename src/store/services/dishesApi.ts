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
		getDishById: builder.query<TDish, string>({
			query: (dishId) => `/dish/${dishId}`,
			providesTags: (_result, _error, dishId) => [
				{ type: "Dish", id: dishId },
			],
		}),
	}),
});

export const { useGetDishesQuery, useGetDishByIdQuery } = dishesApi;
