import { ThemeProvider } from "./Providers/ThemeProvider";
import { UserProvider } from "./Providers/UserProvider";
import { MainFooter } from "./Footer/MainFooter.tsx";
import { MainHeader } from "./Header/MainHeader.tsx";
import { RestaurantsPage } from "./RestaurantList/RestaurantsPage.tsx";
import styles from "./App.module.css";

export const App = () => {
	return (
		<ThemeProvider>
			<UserProvider>
				<div className={styles.app}>
					<MainHeader />
					<main className={styles.main}>
						<RestaurantsPage />
					</main>
					<MainFooter />
				</div>
			</UserProvider>
		</ThemeProvider>
	);
};
