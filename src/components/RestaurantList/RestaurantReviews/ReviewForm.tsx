import { UIButton } from "../../UI/Button/UIButton.tsx";
import { Counter } from "../../UI/Counter/UICounter.tsx";
import { useForm } from "./useForm.ts";
import styles from "./ReviewForm.module.css";

export const ReviewForm = () => {
	const { form, setName, setText, setRating, clear } = useForm();

	return (
		<form className={styles.form}>
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

			<div className={styles.actions}>
				<UIButton size="large" color="danger" onClick={clear}>
					Clear
				</UIButton>
			</div>
		</form>
	);
};
