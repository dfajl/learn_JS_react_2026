import { api } from "./api.ts";
import type { TRestaurant } from "../../components/RestaurantList/restaurantTypes.ts";

export const restaurantsApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getRestaurants: builder.query<TRestaurant[], void>({
			query: () => "/restaurants",
			providesTags: ["Restaurant"],
		}),
		getRestaurantById: builder.query<TRestaurant, string>({
			query: (id) => `/restaurant/${id}`,
			providesTags: (_result, _error, id) => [{ type: "Restaurant", id }],
		}),
	}),
});

export const { useGetRestaurantsQuery, useGetRestaurantByIdQuery } = restaurantsApi;
