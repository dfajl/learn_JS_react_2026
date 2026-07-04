import type { TReviewItem } from "../types.ts";
import { ReviewItem } from "./ReviewItem.tsx";
export const Reviews = ({ reviews }: { reviews: TReviewItem[] }) => {
	return (
		<div>
			<h3 style={{ color: "blue" }}>
				Reviews
			</h3>
			<ul>
				{reviews.map((review: TReviewItem) => (
					<ReviewItem key={review.id} review={review} />
				))}
			</ul>
		</div>
	);
};