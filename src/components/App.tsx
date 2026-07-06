import { MainFooter } from "./Footer/MainFooter.tsx";
import { MainHeader } from "./Header/MainHeader.tsx";
import { RestaurantList } from "./RestaurantList/RestaurantList.tsx";

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
				<RestaurantList />
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