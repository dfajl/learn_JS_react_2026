import { Link } from "react-router-dom";
import { RestaurantContainer } from "../../components/RestaurantList/RestaurantItem/RestaurantContainer.tsx";
import styles from "./RestaurantPage.module.css";

export const RestaurantPage = () => {
	return (
		<div className={styles.page}>
			<Link to="/" className={styles.back}>
				← All restaurants
			</Link>
			<RestaurantContainer />
		</div>
	);
};
