import type { TMenuItem } from "../types.ts";

export const MenuItem = ({ menuItem }: { menuItem: TMenuItem }) => {
	return (
		<li key={menuItem.id}>
			{menuItem.name}
		</li>
	);
};