import { rtkQueryApi } from "./rtkQueryApi.ts";
import type { TUser } from "../../components/RestaurantList/restaurantTypes.ts";

export const clientsApi = rtkQueryApi.injectEndpoints({
	endpoints: (builder) => ({
		getClients: builder.query<TUser[], void>({
			query: () => "/users",
			providesTags: ["Clients"],
		}),
	}),
});

export const { useGetClientsQuery } = clientsApi;
