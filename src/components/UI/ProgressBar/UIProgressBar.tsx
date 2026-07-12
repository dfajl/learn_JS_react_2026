import { useScrollProgress } from "../../../hooks/useScrollProgress.ts";
import type { TProgressBarProps } from "./types.ts";
import styles from "./UIProgressBar.module.css";

export const ProgressBar = ({ color }: TProgressBarProps) => {
	const scrollProgress = useScrollProgress();

	return (
		<div className={styles.track}>
			<div
				className={styles.fill}
				style={{
					width: `${scrollProgress}%`,
					backgroundColor: color,
				}}
			/>
		</div>
	);
};
