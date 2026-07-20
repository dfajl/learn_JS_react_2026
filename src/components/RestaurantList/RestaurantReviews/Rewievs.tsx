import { useUser } from "../../Providers/UserProvider";
import { ReviewContainer } from "./ReviewContainer.tsx";
import { ReviewForm } from "./ReviewForm.tsx";
import styles from "./Reviews.module.css";

export const Reviews = ({ reviewIds }: { reviewIds: string[] }) => {
	const { user } = useUser();

	return (
		<div className={styles.section}>
			<h3 className={styles.title}>Reviews</h3>
			<ul className={styles.list}>
				{reviewIds.map((id) => (
					<ReviewContainer key={id} id={id} />
				))}
			</ul>
			{user && <ReviewForm />}
		</div>
	);
};
