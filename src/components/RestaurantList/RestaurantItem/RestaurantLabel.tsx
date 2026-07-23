import { useAppSelector } from "../../../store/hooks.ts";
import { selectRestaurantById } from "../../../store/entities/restaurant/slice.ts";

type TRestaurantLabelProps = {
	id: string;
};

export const RestaurantLabel = ({ id }: TRestaurantLabelProps) => {
	const restaurant = useAppSelector((state) => selectRestaurantById(state, id));

	return restaurant?.name ?? "";
};
