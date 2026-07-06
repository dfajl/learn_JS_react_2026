import { useState } from "react";
import type { TMenuItem } from "../types.ts";
import { Counter } from "../../UI/Counter/UICounter.tsx";

export const MenuItem = ({ menuItem }: { menuItem: TMenuItem }) => {
	const [count, setCount] = useState(0);

	return (
		<li>
			{menuItem.name} — {menuItem.price * count} ₽
			<Counter count={count} onChange={setCount} />
		</li>
	);
};
