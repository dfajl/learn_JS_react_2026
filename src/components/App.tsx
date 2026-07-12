import { MainFooter } from "./Footer/MainFooter.tsx";
import { MainHeader } from "./Header/MainHeader.tsx";
import { RestaurantsPage } from "./RestaurantList/RestaurantsPage.tsx";
import styles from "./App.module.css";

export const App = () => {
	return (
		<div className={styles.app}>
			<MainHeader />
			<main className={styles.main}>
				<RestaurantsPage />
			</main>
			<MainFooter />
		</div>
	);
};
