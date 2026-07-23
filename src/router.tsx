import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout/Layout.tsx";
import { HomePage } from "./pages/HomePage/HomePage.tsx";
import { RestaurantPage } from "./pages/RestaurantPage/RestaurantPage.tsx";

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
				path: "restaurants/:id",
				element: <RestaurantPage />,
			},
		],
	},
]);
