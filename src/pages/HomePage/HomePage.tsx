import { Link } from "react-router-dom";
import { useAppSelector } from "../../store/hooks.ts";
import { selectRestaurantIds } from "../../store/entities/restaurant/slice.ts";
import { RestaurantLabel } from "../../components/RestaurantList/RestaurantItem/RestaurantLabel.tsx";
import styles from "./HomePage.module.css";

export const HomePage = () => {
	const restaurantIds = useAppSelector(selectRestaurantIds);

	return (
		<div className={styles.page}>
			<p className={styles.brand}>MESA</p>
			<h1 className={styles.title}>Restaurants</h1>
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
		</div>
	);
};
