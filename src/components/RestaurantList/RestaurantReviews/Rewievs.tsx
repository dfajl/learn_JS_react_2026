import { useUser } from "../../Providers/UserProvider";
import { ReviewForm } from "./ReviewForm.tsx";
import { ReviewItem } from "./ReviewItem.tsx";
import type { TReview } from "../restaurantTypes.ts";
import styles from "./Reviews.module.css";

export const Reviews = ({
	reviews,
	clientsById,
	restaurantId,
}: {
	reviews: TReview[];
	clientsById: Record<string, string>;
	restaurantId: string;
}) => {
	const { user } = useUser();

	return (
		<div className={styles.section}>
			<h3 className={styles.title}>Reviews</h3>
			<ul className={styles.list}>
				{reviews.map((review) => (
					<ReviewItem
						key={review.id}
						review={review}
						userName={clientsById[review.userId] ?? "Unknown"}
					/>
				))}
			</ul>
			{user && (
				<ReviewForm restaurantId={restaurantId} />
			)}
		</div>
	);
};
