import { useScrollProgress } from "../../../hooks/useScrollProgress.ts";
import type { TProgressBarProps } from "./types.ts";

export const ProgressBar = ({ color }: TProgressBarProps) => {
	const scrollProgress = useScrollProgress();
	const fillWidth = `${scrollProgress}%`;

	return (
		<div
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				right: 0,
				zIndex: 1000,
				width: "100%",
				height: "8px",
				backgroundColor: "#e0e0e0",
			}}
		>
			<div
				style={{
					width: fillWidth,
					height: "100%",
					backgroundColor: color,
				}}
			/>
		</div>
	);
};
