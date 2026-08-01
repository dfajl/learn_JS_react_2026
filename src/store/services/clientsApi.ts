import { api } from "./api.ts";
import type { TUser } from "../../components/RestaurantList/restaurantTypes.ts";

export const clientsApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getClients: builder.query<TUser[], void>({
			query: () => "/users",
			providesTags: ["Clients"],
		}),
	}),
});

export const { useGetClientsQuery } = clientsApi;
