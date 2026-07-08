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
					<select
						value={form.rating}
						onChange={(e) => setRating(Number(e.target.value))}
					>
						<option value={1}>1</option>
						<option value={2}>2</option>
						<option value={3}>3</option>
						<option value={4}>4</option>
						<option value={5}>5</option>
					</select>
				</label>
			</div>

			<button type="button" onClick={clear}>
				Clear
			</button>
		</form>
	);
};

