import type { TUISwitcherProps } from "./types.ts";
import styles from "./UISwitcher.module.css";

export const UISwitcher = ({
	checked,
	onChange,
	label,
	"aria-label": ariaLabel,
}: TUISwitcherProps) => {
	return (
		<label className={styles.switch}>
			{label && <span className={styles.label}>{label}</span>}
			<input
				type="checkbox"
				className={styles.input}
				checked={checked}
				onChange={(e) => onChange(e.target.checked)}
				aria-label={ariaLabel ?? label}
			/>
			<span className={styles.track}>
				<span className={styles.thumb} />
			</span>
		</label>
	);
};
