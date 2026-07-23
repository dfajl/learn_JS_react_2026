import { useParams } from "react-router-dom";
import { useAppSelector } from "../../store/hooks.ts";
import { selectRestaurantById } from "../../store/entities/restaurant/slice.ts";
import { Menus } from "../../components/RestaurantList/RestaurantMenus/Menus.tsx";

export const RestaurantMenuPage = () => {
	const { id = "" } = useParams();
	const restaurant = useAppSelector((state) =>
		selectRestaurantById(state, id),
	);

	if (!restaurant) {
		return null;
	}

	return <Menus menuIds={restaurant.menu} />;
};
