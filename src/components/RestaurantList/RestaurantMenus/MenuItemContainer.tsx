import { Link } from "react-router-dom";
import { useAppSelector } from "../../../store/hooks.ts";
import { selectDishById } from "../../../store/entities/dish/slice.ts";
import styles from "./MenuItemContainer.module.css";

export const MenuItemContainer = ({
	menuId,
	restaurantId,
}: {
	menuId: string;
	restaurantId: string;
}) => {
	const dish = useAppSelector((state) => selectDishById(state, menuId));

	if (!dish) {
		return null;
	}

	return (
		<Link
			className={styles.link}
			to={`/dish/${dish.id}`}
			state={{ restaurantId }}
		>
			{dish.name}
		</Link>
	);
};
