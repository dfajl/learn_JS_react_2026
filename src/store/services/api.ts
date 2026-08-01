import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api" }),
	tagTypes: ["Restaurant", "Dish", "Review", "Clients"],
	refetchOnMountOrArgChange: false,
	refetchOnFocus: false,
	refetchOnReconnect: false,
	keepUnusedDataFor: Infinity,
	endpoints: () => ({}),
});