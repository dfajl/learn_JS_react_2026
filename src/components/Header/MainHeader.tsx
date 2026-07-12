import { ProgressBar } from "../UI/ProgressBar/UIProgressBar.tsx";
import styles from "./MainHeader.module.css";

export const MainHeader = () => {
	return (
		<header className={styles.header}>
			<h2 className={styles.title}>Header</h2>
			<ProgressBar color="red" />
		</header>
	);
};
