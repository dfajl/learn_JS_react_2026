import { UIButton } from "../../UI/Button/UIButton.tsx";
import { Counter } from "../../UI/Counter/UICounter.tsx";
import { useForm } from "./useForm.ts";
import styles from "./ReviewForm.module.css";
import type { TReview } from "../restaurantTypes.ts";
import type { TReviewFormState } from "./types.ts";

export const ReviewForm = ({
	editingReview,
	authorName,
	defaultAuthorName,
	onSubmit,
	onCancelEdit,
	isSubmitting,
	isError,
	isSuccess,
	errorMessage,
}: {
	editingReview?: TReview | null;
	authorName?: string;
	defaultAuthorName?: string;
	onSubmit: (form: TReviewFormState) => Promise<void>;
	onCancelEdit?: () => void;
	isSubmitting: boolean;
	isError: boolean;
	isSuccess: boolean;
	errorMessage: string;
}) => {
	const isEditing = Boolean(editingReview);

	const initialState: TReviewFormState = isEditing
		? {
				name: authorName ?? defaultAuthorName ?? "",
				text: editingReview!.text,
				rating: editingReview!.rating,
			}
		: { name: "", text: "", rating: 1 };

	const { form, setName, setText, setRating, clear } = useForm(initialState);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			await onSubmit(form);
			clear();
		} catch (err: unknown) {
			console.error(err);
		}
	};

	const isFormEmpty = !form.name.trim() || !form.text.trim();
	const isActionsDisabled = isFormEmpty || isSubmitting;

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
