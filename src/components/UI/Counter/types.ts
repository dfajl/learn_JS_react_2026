export type TCounterProps = {
	count: number;
	onChange: (count: number) => void;
	min?: number;
	max?: number;
};