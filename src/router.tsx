import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout/Layout.tsx";
import { RestaurantsPage } from "./components/RestaurantList/RestaurantsPage.tsx";
import { HomePage } from "./pages/HomePage/HomePage.tsx";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: "restaurants",
				element: <RestaurantsPage />,
			},
		],
	},
]);
