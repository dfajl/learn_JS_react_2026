import type { TMenuItem } from "../types";
import { MenuItem } from "./MenuItem.tsx";

export const Menus = ({ menu, style }: { menu: TMenuItem[], style: React.CSSProperties }) => {
	return (
		<div style={style}>
			<h3 style={{ color: "blue" }}>Menu</h3>
			<ul>
				{menu.map((menuItem: TMenuItem) => (
					<MenuItem key={menuItem.id} menuItem={menuItem} />
				))}
			</ul>
		</div>
	);
};