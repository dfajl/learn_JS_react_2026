import cn from "classnames";
import type { TUIButtonProps } from "./types.ts";
import styles from "./UIButton.module.css";

export const UIButton = ({
	children,
	size = "medium",
	color = "primary",
	active = false,
	className,
	type = "button",
	...props
}: TUIButtonProps) => {	return (
		<button
			type={type}
			className={cn(
				styles.button,
				styles[size],
				styles[color],
				{
					[styles.active]: active,
				},
				className,
			)}
			{...props}
		>
			{children}
		</button>
	);
};
