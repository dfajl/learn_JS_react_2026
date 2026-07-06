import type { TCounterProps } from "./types.ts";

export const Counter = ({
	count,
	onChange,
	min = 0,
	max = 5,
}: TCounterProps) => {
	return (
		<div>
			{count > min && (
				<>
					<button onClick={() => onChange(count - 1)}>Remove one</button>
					<div>{count}</div>
				</>
			)}
			<button
				disabled={count >= max}
				onClick={() => onChange(count + 1)}
			>
				Add one
			</button>
		</div>
	);
};
