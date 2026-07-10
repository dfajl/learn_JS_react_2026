import { ProgressBar } from "../UI/ProgressBar/UIProgressBar.tsx";
import { useScrollProgress } from "../../hooks/useScrollProgress.ts";

export const MainHeader = ({ style }: { style: React.CSSProperties }) => {
	const scrollProgress = useScrollProgress();

	return (
		<header style={style}>
			<h2>Header</h2>
			<ProgressBar width={scrollProgress} color="red" />
		</header>
	);
};
