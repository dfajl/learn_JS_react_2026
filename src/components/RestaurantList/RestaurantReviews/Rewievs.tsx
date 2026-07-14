import type { TReviewItem } from "../restaurantTypes.ts";
import { useUser } from "../../Providers/UserProvider";
import { ReviewItem } from "./ReviewItem.tsx";
import { ReviewForm } from "./ReviewForm.tsx";
import styles from "./Reviews.module.css";

export const Reviews = ({ reviews }: { reviews: TReviewItem[] }) => {
	const { user } = useUser();

	return (
		<div className={styles.section}>
			<h3 className={styles.title}>Reviews</h3>
			<ul className={styles.list}>
				{reviews.map((review: TReviewItem) => (
					<ReviewItem key={review.id} review={review} />
				))}
			</ul>
			{user && <ReviewForm />}
		</div>
	);
};
