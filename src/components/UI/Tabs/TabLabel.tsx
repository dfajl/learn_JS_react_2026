import { useAppSelector } from "../../../store/hooks.ts";
import { selectRestaurantById } from "../../../store/entities/restaurant/slice.ts";

type TTabLabelProps = {
	id: string;
};

export const TabLabel = ({ id }: TTabLabelProps) => {
	const restaurant = useAppSelector((state) => selectRestaurantById(state, id));

	return restaurant?.name ?? "";
};
