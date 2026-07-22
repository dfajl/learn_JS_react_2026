import { Outlet } from "react-router-dom";
import { MainFooter } from "../Footer/MainFooter.tsx";
import { MainHeader } from "../Header/MainHeader.tsx";
import styles from "./Layout.module.css";

export const Layout = () => {
	return (
		<div className={styles.layout}>
			<MainHeader />
			<main className={styles.main}>
				<Outlet />
			</main>
			<MainFooter />
		</div>
	);
};
