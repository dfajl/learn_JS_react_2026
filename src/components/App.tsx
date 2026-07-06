import { MainFooter } from "./Footer/MainFooter.tsx";
import { MainHeader } from "./Header/MainHeader.tsx";
import { RestaurantsPage } from "./RestaurantList/RestaurantsPage.tsx";

export const App = () => {
	return (
		<>
			<MainHeader style={{
				border: "1px solid black",
				padding: "10px",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "50px"
			}}/>
			<main>
				<RestaurantsPage />
			</main>
			<MainFooter style={{
				border: "1px solid black",
				padding: "10px",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "50px"
			}}/>
		</>
	);
};