import { Counter } from "../../UI/Counter/UICounter.tsx";
import { useForm } from "./useForm.ts";

export const ReviewForm = () => {
	const { form, setName, setText, setRating, clear } = useForm();

	return (
		<form>
			<div>
				<label>
					Name:
					<input
						type="text"
						value={form.name}
						onChange={(e) => setName(e.target.value)}
					/>
				</label>
			</div>

			<div>
				<label>
					Text:
					<textarea
						value={form.text}
						onChange={(e) => setText(e.target.value)}
					/>
				</label>
			</div>

			<div>
				<label>
					Rating:
					<Counter
						count={form.rating}
						onChange={setRating}
						min={1}
						max={5}
					/>
				</label>
			</div>

			<button type="button" onClick={clear}>
				Clear
			</button>
		</form>
	);
};

