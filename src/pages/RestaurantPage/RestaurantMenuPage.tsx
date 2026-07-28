import { Link, useParams } from "react-router-dom";
import { skipToken } from "@reduxjs/toolkit/query/react";
import { useGetDishesQuery } from "../../store/services/dishesApi.ts";
import styles from "./RestaurantMenuPage.module.css";

export const RestaurantMenuPage = () => {
	const { id = "" } = useParams();

	const { data: dishes, isLoading, isError, error } = useGetDishesQuery(
		id || skipToken,
	);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	const errorMessage =
		typeof error === "object" && error !== null && "status" in error
			? `Request failed (${String(error.status)})`
			: "Failed to load dishes";

	if (isError) {
		return <div>Error: {errorMessage}</div>;
	}

	if (!dishes || dishes.length === 0) {
		return <div>No dishes found</div>;
	}

	return (
		<div className={styles.section}>
			<h3 className={styles.title}>Menu</h3>
			<ul className={styles.list}>
				{dishes.map((dish) => (
					<li key={dish.id}>
						<Link
							className={styles.link}
							to={`/dish/${dish.id}`}
							state={{ restaurantId: id }}
						>
							{dish.name}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};
