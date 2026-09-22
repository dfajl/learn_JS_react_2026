import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.css";

export const NotFoundPage = () => {
	return (
		<section className={styles.page}>
			<p className={styles.code}>404</p>
			<h1 className={styles.title}>Page not found</h1>
			<p className={styles.description}>
				The address may be incorrect or the page may no longer exist.
			</p>
			<Link className={styles.link} to="/">
				Back to restaurants
			</Link>
		</section>
	);
};
