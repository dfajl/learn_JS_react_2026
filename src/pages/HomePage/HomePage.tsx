import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";

export const HomePage = () => {
	return (
		<section className={styles.hero}>
			<div className={styles.glow} aria-hidden="true" />
			<div className={styles.content}>
				<p className={styles.brand}>MESA</p>
				<h1 className={styles.headline}>Find a table worth keeping</h1>
				<p className={styles.lead}>
					Local kitchens, honest menus, and evenings that start with
					one good pick.
				</p>
				<Link to="/restaurants/" className={styles.cta}>
					Browse restaurants
				</Link>
			</div>
		</section>
	);
};
