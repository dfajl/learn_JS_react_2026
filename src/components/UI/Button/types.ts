export type TUIButtonSize = "small" | "medium" | "large";

export type TUIButtonColor = "primary" | "danger" | "neutral";

export type TUIButtonProps = {
	size?: TUIButtonSize;
	color?: TUIButtonColor;
	active?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
