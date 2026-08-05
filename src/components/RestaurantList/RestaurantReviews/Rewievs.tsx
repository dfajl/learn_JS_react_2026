import { useState } from "react";
import { useUser } from "../../Providers/UserProvider";
import { ReviewForm } from "./ReviewForm.tsx";
import { ReviewItem } from "./ReviewItem.tsx";
import type { TReview } from "../restaurantTypes.ts";
import type { TReviewFormState } from "./types.ts";
import {
	useAddReviewMutation,
	useUpdateReviewMutation,
} from "../../../store/services/reviewsApi.ts";
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
	const [addReview, addState] = useAddReviewMutation();
	const [updateReview, updateState] = useUpdateReviewMutation();

	const isEditing = Boolean(editingReview);
	const isSubmitting = addState.isLoading || updateState.isLoading;
	const isError = isEditing ? updateState.isError : addState.isError;
	const isSuccess = isEditing ? updateState.isSuccess : addState.isSuccess;
	const error = isEditing ? updateState.error : addState.error;

	const errorMessage =
		typeof error === "object" && error !== null && "status" in error
			? `Request failed (${String(error.status)})`
			: isEditing
				? "Failed to update review"
				: "Failed to add review";

	const handleSubmit = async (form: TReviewFormState) => {
		if (editingReview) {
			await updateReview({
				reviewId: editingReview.id,
				restaurantId,
				review: {
					text: form.text,
					rating: form.rating,
				},
			}).unwrap();
			setEditingReview(null);
			return;
		}

		await addReview({
			restaurantId,
			review: {
				userId: user?.id ?? "",
				text: form.text,
				rating: form.rating,
			},
		}).unwrap();
	};

	return (
		<div className={styles.section}>
			<h3 className={styles.title}>Reviews</h3>
			<ul className={styles.list}>
				{reviews.map((review) => (
					<ReviewItem
						key={review.id}
						review={review}
						userName={clientsById[review.userId] ?? "Unknown"}
						canEdit={Boolean(user) && review.userId === user?.id}
						onEdit={setEditingReview}
					/>
				))}
			</ul>
			{user && (
				<ReviewForm
					editingReview={editingReview}
					authorName={
						editingReview
							? clientsById[editingReview.userId]
							: undefined
					}
					defaultAuthorName={user.name}
					onSubmit={handleSubmit}
					onCancelEdit={() => setEditingReview(null)}
					isSubmitting={isSubmitting}
					isError={isError}
					isSuccess={isSuccess}
					errorMessage={errorMessage}
				/>
			)}
		</div>
	);
};
