import type { TCounterProps } from "./types.ts";

export const Counter = ({
	count,
	onChange,
	min = 0,
	max = 5,
	textAdd = "Increase",
	textRemove = "Decrease",
}: TCounterProps) => {
	return (
		<div>
			{count > min && (
				<>
					<button type="button" onClick={() => onChange(count - 1)}>{textRemove}</button>
					<div>{count}</div>
				</>
			)}
			<button
				type="button"
				disabled={count >= max}
				onClick={() => onChange(count + 1)}
			>
				{textAdd}
			</button>
		</div>
	);
};
