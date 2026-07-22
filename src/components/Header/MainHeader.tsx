import { Link } from "react-router-dom";
import { ProgressBar } from "../UI/ProgressBar/UIProgressBar.tsx";
import { ThemeSwitch } from "../Providers/ThemeProvider";
import { UserAuthControls } from "../Providers/UserProvider";
import styles from "./MainHeader.module.css";

export const MainHeader = () => {
	return (
		<header className={styles.header}>
			<div className={styles.auth}>
				<UserAuthControls />
			</div>
			<Link to="/" className={styles.title}>
				MESA
			</Link>
			<div className={styles.switch}>
				<ThemeSwitch />
			</div>
			<ProgressBar color="red" />
		</header>
	);
};
