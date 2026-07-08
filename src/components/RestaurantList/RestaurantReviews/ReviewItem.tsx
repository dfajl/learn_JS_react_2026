import type { TReviewItem } from "../restaurantTypes";

export const ReviewItem = ({ review }: { review: TReviewItem }) => {
	return (
		<li key={review.id}>
			{review.text}
		</li>
	);
};