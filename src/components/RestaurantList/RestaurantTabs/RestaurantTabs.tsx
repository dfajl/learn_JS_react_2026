import type { TRestaurantTabsProps } from "./types";

export const RestaurantTabs = (
	{
	  restaurants,
	  style,
	  onChange,
	  activeRestaurantId,
	}: TRestaurantTabsProps) => {
	return (
		<div role="tablist" style={style}>
			{restaurants.map((restaurant) => (
				<button
				    key={restaurant.id}
					type="button"
					role="tab"
					style={{
					    padding: "10px",
					    fontSize: "16px",
						backgroundColor: restaurant.id === activeRestaurantId ? "rgba(135, 207, 235, 0.645)" : "",
					}}
					onClick={() => onChange(restaurant)}
				>
					{restaurant.name}
				</button>
			))}
		</div>
	);
};
