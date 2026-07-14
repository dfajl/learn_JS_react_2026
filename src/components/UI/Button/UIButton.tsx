import cn from "classnames";
import type { TUIButtonProps } from "./types.ts";
import styles from "./UIButton.module.css";
import { useTheme } from "../../Providers/ThemeProvider";

export const UIButton = ({
	children,
	size = "medium",
	color = "primary",
	active = false,
	className,
	type = "button",
	...props
}: TUIButtonProps) => {
	const { theme } = useTheme();
	return (
		<button
			type={type}
			className={cn(
				styles.button,
				styles[size],
				styles[color],
				styles[theme],
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
