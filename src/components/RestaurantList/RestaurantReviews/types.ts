export type TReviewFormState = {
	name: string;
	text: string;
	rating: number;
};

export type TReviewFormAction =
	| { type: "SET_NAME"; payload: string }
	| { type: "SET_TEXT"; payload: string }
	| { type: "SET_RATING"; payload: number }
	| { type: "RESET"; payload: TReviewFormState }
	| { type: "CLEAR" };