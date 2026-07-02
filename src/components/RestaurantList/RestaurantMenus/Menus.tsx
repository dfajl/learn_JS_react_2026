import type { TMenuItem } from "../types";
import { MenuItem } from "./MenuItem.tsx";

export const Menus = ({ menu }: { menu: TMenuItem[] }) => {
	return (
		<div>
			<h3 style={{ color: "blue" }}>Menu</h3>
			<ul>
				{menu.map((menuItem: TMenuItem) => (
					<MenuItem key={menuItem.id} menuItem={menuItem} />
				))}
			</ul>
		</div>
	);
};