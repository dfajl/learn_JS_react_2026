import { UIButton } from "../Button/UIButton.tsx";
import type { TCounterProps } from "./types.ts";
import styles from "./UICounter.module.css";

export const Counter = ({
	count,
	onChange,
	min = 0,
	max = 5,
	textAdd = "Increase",
	textRemove = "Decrease",
}: TCounterProps) => {
	const isMax = count >= max;

	return (
		<div className={styles.counter}>
			{count > min && (
				<>
					<UIButton
						size="small"
						color="primary"
						onClick={() => onChange(count - 1)}
					>
						{textRemove}
					</UIButton>
					<div className={styles.count}>{count}</div>
				</>
			)}
			<UIButton
				size="small"
				color="primary"
				disabled={isMax}
				onClick={() => onChange(count + 1)}
			>
				{textAdd}
			</UIButton>
		</div>
	);
};
