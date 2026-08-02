import { useEffect } from "react";
import { UIButton } from "../../UI/Button/UIButton.tsx";
import { Counter } from "../../UI/Counter/UICounter.tsx";
import { useForm } from "./useForm.ts";
import styles from "./ReviewForm.module.css";
import {
	useAddReviewMutation,
	useUpdateReviewMutation,
} from "../../../store/services/reviewsApi.ts";
import { useUser } from "../../Providers/UserProvider/useUser.ts";
import type { TReview } from "../restaurantTypes.ts";

export const ReviewForm = ({
	restaurantId,
	editingReview,
	authorName,
	onCancelEdit,
}: {
	restaurantId: string;
	editingReview?: TReview | null;
	authorName?: string;
	onCancelEdit?: () => void;
}) => {
	const { form, setName, setText, setRating, reset, clear } = useForm();
	const [addReview, addState] = useAddReviewMutation();
	const [updateReview, updateState] = useUpdateReviewMutation();
	const { user } = useUser();

	const isEditing = Boolean(editingReview);
	const isSubmitting = addState.isLoading || updateState.isLoading;
	const isError = isEditing ? updateState.isError : addState.isError;
	const isSuccess = isEditing ? updateState.isSuccess : addState.isSuccess;
	const error = isEditing ? updateState.error : addState.error;

	useEffect(() => {
		if (editingReview) {
			reset({
				name: authorName ?? user?.name ?? "",
				text: editingReview.text,
				rating: editingReview.rating,
			});
			return;
		}

		clear();
	}, [editingReview, authorName, user?.name, reset, clear]);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			if (editingReview) {
				await updateReview({
					reviewId: editingReview.id,
					restaurantId,
					review: {
						text: form.text,
						rating: form.rating,
					},
				}).unwrap();
				onCancelEdit?.();
			} else {
				await addReview({
					restaurantId,
					review: {
						userId: user?.id ?? "",
						text: form.text,
						rating: form.rating,
					},
				}).unwrap();
			}

			clear();
		} catch (err: unknown) {
			console.error(err);
		}
	};

	const isFormEmpty = !form.name.trim() || !form.text.trim();
	const isActionsDisabled = isFormEmpty || isSubmitting;

	const errorMessage =
		typeof error === "object" && error !== null && "status" in error
			? `Request failed (${String(error.status)})`
			: isEditing
				? "Failed to update review"
				: "Failed to add review";

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<div className={styles.row}>
				<label htmlFor="review-name" className={styles.label}>
					Name:
				</label>
				<input
					id="review-name"
					className={styles.input}
					type="text"
					value={form.name}
					onChange={(e) => setName(e.target.value)}
					disabled={isEditing}
				/>
			</div>

			<div className={`${styles.row} ${styles.rowTop}`}>
				<label htmlFor="review-text" className={styles.label}>
					Text:
				</label>
				<textarea
					id="review-text"
					className={styles.textarea}
					value={form.text}
					onChange={(e) => setText(e.target.value)}
				/>
			</div>

			<div className={styles.row}>
				<span className={styles.label}>Rating:</span>
				<Counter
					count={form.rating}
					onChange={setRating}
					min={1}
					max={5}
				/>
			</div>

			{isError && !isSubmitting && (
				<div className={styles.error}>{errorMessage}</div>
			)}
			
			{isSuccess && !isSubmitting && (
				<div className={styles.success}>
					{isEditing
						? "Review updated successfully"
						: "Review added successfully"}
				</div>
			)}

			<div className={styles.actions}>
				{isEditing ? (
					<UIButton
						size="large"
						color="danger"
						onClick={onCancelEdit}
						disabled={isSubmitting}
					>
						Cancel
					</UIButton>
				) : (
					<UIButton
						size="large"
						color="danger"
						onClick={clear}
						disabled={isActionsDisabled}
					>
						Clear
					</UIButton>
				)}
				<UIButton
					type="submit"
					size="large"
					color="primary"
					disabled={isActionsDisabled}
				>
					{isSubmitting
						? isEditing
							? "Saving..."
							: "Submitting..."
						: isEditing
							? "Save"
							: "Submit"}
				</UIButton>
			</div>
		</form>
	);
};
