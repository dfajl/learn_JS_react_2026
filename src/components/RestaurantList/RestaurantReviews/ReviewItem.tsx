import type { TReview } from "../restaurantTypes";
import styles from "./ReviewItem.module.css";

export const ReviewItem = ({
	review,
	userName,
}: {
	review: TReview;
	userName: string;
}) => {
	return (
		<li className={styles.item}>
			<p className={styles.text}>
				<strong>{userName}</strong>: {review.text}
			</p>
		</li>
	);
};
