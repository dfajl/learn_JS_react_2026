import { ProgressBar } from "../UI/ProgressBar/UIProgressBar.tsx";

export const MainHeader = ({ style }: { style: React.CSSProperties }) => {
	return (
		<header style={style}>
			<h2>Header</h2>
			<ProgressBar color="red" />
		</header>
	);
};
