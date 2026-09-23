import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks.ts";
import {
	selectRestaurantIds,
	selectRestaurantsError,
	selectRestaurantsStatus,
} from "../../store/entities/restaurant/slice.ts";
import { fetchRestaurants } from "../../store/entities/restaurant/thunks.ts";
import { RestaurantLabel } from "../../components/RestaurantList/RestaurantItem/RestaurantLabel.tsx";
import { UIButton } from "../../components/UI/Button/UIButton.tsx";
import styles from "./HomePage.module.css";

export const HomePage = () => {
	const dispatch = useAppDispatch();
	const restaurantIds = useAppSelector(selectRestaurantIds);
	const status = useAppSelector(selectRestaurantsStatus);
	const error = useAppSelector(selectRestaurantsError);

	useEffect(() => {
		if (status === "idle") {
			dispatch(fetchRestaurants());
		}
	}, [dispatch, status]);

	const handleRetry = () => {
		dispatch(fetchRestaurants());
	};

	return (
		<div className={styles.page}>
			<p className={styles.brand}>MESA</p>
			<h1 className={styles.title}>Restaurants</h1>

			{status === "pending" && <p className={styles.status}>Loading...</p>}
			{status === "rejected" && (
				<>
					<p className={styles.status}>
						{error ?? "Failed to load restaurants"}
					</p>
					<UIButton color="neutral" onClick={handleRetry}>
						Try again
					</UIButton>
				</>
			)}

			{status === "fulfilled" && (
				<nav className={styles.list}>
					{restaurantIds.map((id) => (
						<Link
							key={id}
							className={styles.link}
							to={`/restaurants/${id}`}
						>
							<RestaurantLabel id={id} />
						</Link>
					))}
				</nav>
			)}
		</div>
	);
};
