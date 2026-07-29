import { UIButton } from "../../UI/Button/UIButton.tsx";
import { Counter } from "../../UI/Counter/UICounter.tsx";
import { useForm } from "./useForm.ts";
import styles from "./ReviewForm.module.css";
import { useAddReviewMutation } from "../../../store/services/reviewsApi.ts";
import { useUser } from "../../Providers/UserProvider/useUser.ts";

export const ReviewForm = ({
	restaurantId,
}: {
	restaurantId: string;
}) => {
	const { form,
		setName,
		setText,
		setRating,
		clear,
	} = useForm();

	const [addReview, { isLoading: isSubmitting, isError, error, isSuccess }] = useAddReviewMutation();
	const { user } = useUser();

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			await addReview({
				restaurantId,
				review: {
					userId: user?.id ?? "",
					text: form.text,
					rating: form.rating,
				},
			}).unwrap();

			clear();
		} catch(error: unknown) {
			console.error(error);
		}
	};

	const isFormEmpty = !form.name.trim() || !form.text.trim();
    const isActionsDisabled = isFormEmpty || isSubmitting;

	const errorMessage =
		typeof error === "object" && error !== null && "status" in error
			? `Request failed (${String(error.status)})`
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

			{isError && !isSubmitting && <div className={styles.error}>{errorMessage}</div>}
			{isSuccess && !isSubmitting && <div className={styles.success}>Review added successfully</div>}

			<div className={styles.actions}>
				<UIButton
					size="large"
					color="danger"
					onClick={clear}
					disabled={isActionsDisabled}
				>
					Clear
				</UIButton>
				<UIButton
					type="submit"
					size="large"
					color="primary"
					disabled={isActionsDisabled}
				>
					{isSubmitting ? "Submitting..." : "Submit"}
				</UIButton>
			</div>
		</form>
	);
};

