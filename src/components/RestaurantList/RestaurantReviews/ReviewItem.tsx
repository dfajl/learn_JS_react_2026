import type { TReview } from "../restaurantTypes";
import { UIButton } from "../../UI/Button/UIButton.tsx";
import styles from "./ReviewItem.module.css";

export const ReviewItem = ({
	review,
	userName,
	canEdit,
	onEdit,
}: {
	review: TReview;
	userName: string;
	canEdit?: boolean;
	onEdit?: (review: TReview) => void;
}) => {
	return (
		<li className={styles.item}>
			<div className={styles.content}>
				<p className={styles.text}>
					<strong>{userName}</strong>: {review.text}
				</p>
				{canEdit && (
					<UIButton
						size="small"
						color="neutral"
						onClick={() => onEdit?.(review)}
					>
						Edit
					</UIButton>
				)}
			</div>
		</li>
	);
};
