import type { TReviewItem } from "../types";

export const ReviewItem = ({ review }: { review: TReviewItem }) => {
	return (
		<li key={review.id}>
			{review.text}
		</li>
	);
};