import {
	Outlet,
	useMatch,
	useNavigate,
} from "react-router-dom";
import type { TRestaurant } from "../restaurantTypes.ts";
import { Tabs } from "../../UI/Tabs/Tabs.tsx";
import styles from "./RestaurantItem.module.css";

const TAB_IDS = ["menu", "reviews"] as const;

const TAB_LABELS: Record<(typeof TAB_IDS)[number], string> = {
	menu: "Menu",
	reviews: "Reviews",
};

export const RestaurantItem = ({ restaurant }: { restaurant: TRestaurant }) => {
	const navigate = useNavigate();
	const reviewsMatch = useMatch("/restaurants/:id/reviews");
	const activeTab = reviewsMatch ? "reviews" : "menu";

	const handleTabChange = (tabId: string) => {
		navigate(`/restaurants/${restaurant.id}/${tabId}`);
	};

	return (
		<div className={styles.restaurant}>
			<h2 className={styles.name}>Name: {restaurant.name}</h2>
			<Tabs
				itemIds={[...TAB_IDS]}
				activeId={activeTab}
				onChange={handleTabChange}
				direction="row"
			>
				{(tabId) => TAB_LABELS[tabId as (typeof TAB_IDS)[number]]}
			</Tabs>
			<Outlet />
		</div>
	);
};
