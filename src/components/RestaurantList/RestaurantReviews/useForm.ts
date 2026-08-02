import { useCallback, useReducer } from "react";
import type { TReviewFormAction, TReviewFormState } from "./types";

const INITIAL_STATE: TReviewFormState = {
	name: "",
	text: "",
	rating: 1,
};

const reducer = (
	state: TReviewFormState,
	action: TReviewFormAction,
): TReviewFormState => {
	switch (action.type) {
		case "SET_NAME":
			return { ...state, name: action.payload };
		case "SET_TEXT":
			return { ...state, text: action.payload };
		case "SET_RATING":
			return { ...state, rating: action.payload };
		case "RESET":
			return { ...action.payload };
		case "CLEAR":
			return { ...INITIAL_STATE };
		default:
			return state;
	}
};

export const useForm = () => {
	const [form, dispatch] = useReducer(reducer, INITIAL_STATE);

	const setName = useCallback(
		(value: string) => dispatch({ type: "SET_NAME", payload: value }),
		[],
	);
	const setText = useCallback(
		(value: string) => dispatch({ type: "SET_TEXT", payload: value }),
		[],
	);
	const setRating = useCallback(
		(value: number) => dispatch({ type: "SET_RATING", payload: value }),
		[],
	);
	const reset = useCallback(
		(value: TReviewFormState) => dispatch({ type: "RESET", payload: value }),
		[],
	);
	const clear = useCallback(() => dispatch({ type: "CLEAR" }), []);

	return { form, setName, setText, setRating, reset, clear };
};
