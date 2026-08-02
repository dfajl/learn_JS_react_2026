import { useState } from "react";
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
	const [editingReview, setEditingReview] = useState<TReview | null>(null);

	return (
		<div className={styles.section}>
			<h3 className={styles.title}>Reviews</h3>
			<ul className={styles.list}>
				{reviews.map((review) => (
					<ReviewItem
						key={review.id}
						review={review}
						userName={clientsById[review.userId] ?? "Unknown"}
						canEdit={Boolean(user)}
						onEdit={setEditingReview}
					/>
				))}
			</ul>
			{user && (
				<ReviewForm
					restaurantId={restaurantId}
					editingReview={editingReview}
					authorName={
						editingReview
							? clientsById[editingReview.userId]
							: user.name
					}
					onCancelEdit={() => setEditingReview(null)}
				/>
			)}
		</div>
	);
};
