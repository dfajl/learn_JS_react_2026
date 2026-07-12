import type { TReviewItem } from "../restaurantTypes";
import styles from "./ReviewItem.module.css";

export const ReviewItem = ({ review }: { review: TReviewItem }) => {
	return (
		<li className={styles.item}>
			<p className={styles.text}>{review.text}</p>
		</li>
	);
};
