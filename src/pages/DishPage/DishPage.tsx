import { Link, useLocation, useParams } from "react-router-dom";
import { MenuItem } from "../../components/RestaurantList/RestaurantMenus/MenuItem.tsx";
import { selectDishById } from "../../store/entities/dish/slice.ts";
import { useAppSelector } from "../../store/hooks.ts";
import styles from "./DishPage.module.css";

export const DishPage = () => {
	const { dishId = "" } = useParams();
	const { restaurantId } = useLocation().state ?? {};

	const dish = useAppSelector((state) => selectDishById(state, dishId));

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
