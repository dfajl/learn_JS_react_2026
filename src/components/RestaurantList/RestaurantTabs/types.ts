import type { TRestaurant } from "../restaurantTypes";

export type TRestaurantTabsProps = {
	restaurants: TRestaurant[];
	style: React.CSSProperties;
	onChange: (restaurant: TRestaurant) => void;
	activeRestaurantId: string | undefined;
};