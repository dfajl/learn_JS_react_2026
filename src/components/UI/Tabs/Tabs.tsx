import type { TTabsProps } from "./types.ts";

export const Tabs = ({ items, activeId, onChange, style }: TTabsProps) => {
	return (
		<div role="tablist" style={style}>
			{items.map((item) => (
				<button
					key={item.id}
					type="button"
					role="tab"
					aria-selected={item.id === activeId}
					style={{
						padding: "10px",
						fontSize: "16px",
						backgroundColor:
							item.id === activeId ? "rgba(135, 207, 235, 0.645)" : "",
					}}
					onClick={() => onChange(item.id)}
				>
					{item.label}
				</button>
			))}
		</div>
	);
};
