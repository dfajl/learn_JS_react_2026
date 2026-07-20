import { useAppSelector } from "../../../store/hooks.ts";
import { selectDishById } from "../../../store/entities/dish/slice.ts";
import { MenuItem } from "./MenuItem.tsx";

export const MenuItemContainer = ({ id }: { id: string }) => {
	const dish = useAppSelector((state) => selectDishById(state, id));

	if (!dish) {
		return null;
	}

	return <MenuItem menuItem={dish} />;
};
