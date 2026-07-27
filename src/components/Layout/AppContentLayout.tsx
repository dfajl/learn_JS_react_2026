import { Outlet } from "react-router-dom";
import { CartContainer } from "../Cart/CartContainer.tsx";
import styles from "./AppContentLayout.module.css";

export const AppContentLayout = () => {
	return (
		<div className={styles.content}>
			<CartContainer />
			<Outlet />
		</div>
	);
};
