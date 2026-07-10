import { useState } from "react";
import type { TMenuItem } from "../restaurantTypes.ts";
import { Counter } from "../../UI/Counter/UICounter.tsx";

export const DishCounter = ({ menuItem }: { menuItem: TMenuItem }) => {
	const [count, setCount] = useState(0);

	return (
		<>
			{menuItem.price * count} ₽
			<Counter count={count} onChange={setCount} />
		</>
	);
};
