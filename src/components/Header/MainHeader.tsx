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
			<h2 className={styles.title}>Header</h2>
			<div className={styles.switch}>
				<ThemeSwitch />
			</div>
			<ProgressBar color="red" />
		</header>
	);
};
