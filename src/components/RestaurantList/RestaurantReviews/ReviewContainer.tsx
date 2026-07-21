import { useAppSelector } from "../../../store/hooks.ts";
import { selectReviewById } from "../../../store/entities/review/slice.ts";
import { selectUserById } from "../../../store/entities/user/slice.ts";
import { ReviewItem } from "./ReviewItem.tsx";

export const ReviewContainer = ({ id }: { id: string }) => {
	const review = useAppSelector((state) => selectReviewById(state, id));
	const user = useAppSelector((state) =>
		review ? selectUserById(state, review.userId) : undefined,
	);

	if (!review) {
		return null;
	}

	return (
		<ReviewItem
			review={review}
			userName={user?.name ?? "Unknown"}
		/>
	);
};
