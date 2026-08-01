import { Link, useLocation, useParams } from "react-router-dom";
import { MenuItem } from "../../components/RestaurantList/RestaurantMenus/MenuItem.tsx";
import styles from "./DishPage.module.css";
import { useGetDishByIdQuery } from "../../store/services/dishesApi.ts";

export const DishPage = () => {
	const { dishId = "" } = useParams();
	const { restaurantId } = useLocation().state ?? {};

	const { data: dish, isLoading, isError, error } = useGetDishByIdQuery(dishId);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	const errorMessage =
		typeof error === "object" && error !== null && "status" in error
			? `Request failed (${String(error.status)})`
			: "Failed to load dish";

	if (isError) {
		return <div>Error: {errorMessage}</div>;
	}

	if (!dish) {
		return null;
	}

	return (
		<div className={styles.page}>
			{restaurantId && (
				<Link
					className={styles.back}
					to={`/restaurants/${restaurantId}/menu/`}
				>
					← Back to restaurant
				</Link>
			)}
			<MenuItem menuItem={dish} />
		</div>
	);
};
