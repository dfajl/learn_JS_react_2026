export type TCounterProps = {
	count: number;
	onChange: (count: number) => void;
	textAdd?: string;
	textRemove?: string;
	min?: number;
	max?: number;
};