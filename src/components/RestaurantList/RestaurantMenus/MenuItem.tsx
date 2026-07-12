import type { TMenuItem } from "../restaurantTypes.ts";
import { DishCounter } from "./DishCounter.tsx";

export const MenuItem = ({ menuItem }: { menuItem: TMenuItem }) => {
	return (
		<li>
			{menuItem.name} — <DishCounter menuItem={menuItem} />
		</li>
	);
};
