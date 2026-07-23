import { Navigate, createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout/Layout.tsx";
import { HomePage } from "./pages/HomePage/HomePage.tsx";
import { RestaurantPage } from "./pages/RestaurantPage/RestaurantPage.tsx";
import { RestaurantMenuPage } from "./pages/RestaurantPage/RestaurantMenuPage.tsx";
import { RestaurantReviewsPage } from "./pages/RestaurantPage/RestaurantReviewsPage.tsx";

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
				children: [
					{
						index: true,
						element: <Navigate to="menu"/>,
					},
					{
						path: "menu",
						element: <RestaurantMenuPage />,
					},
					{
						path: "reviews",
						element: <RestaurantReviewsPage />,
					},
				],
			},
		],
	},
]);
