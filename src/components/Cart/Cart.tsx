import type { TCartListItem } from "./types.ts";
import styles from "./Cart.module.css";

export const Cart = ({ items }: { items: TCartListItem[] }) => {
	const total = items.reduce(
		(sum, item) => sum + item.price * item.amount,
		0,
	);

	return (
		<section className={styles.cart}>
			<h3 className={styles.title}>Cart</h3>
			{items.length === 0 ? (
				<p className={styles.empty}>Cart is empty</p>
			) : (
				<>
					<ul className={styles.list}>
						{items.map((item) => (
							<li key={item.id} className={styles.item}>
								<span className={styles.name}>{item.name}</span>
								<span className={styles.meta}>
									{item.amount} × {item.price} ₽ ={" "}
									{item.amount * item.price} ₽
								</span>
							</li>
						))}
					</ul>
					<p className={styles.total}>Total: {total} ₽</p>
				</>
			)}
		</section>
	);
};
