import cn from "classnames";
import { UIButton } from "../Button/UIButton.tsx";
import type { TTabsProps } from "./types.ts";
import styles from "./Tabs.module.css";

export const Tabs = ({
	renderTabContent,
	itemIds,
	activeId = null,
	onChange,
	direction = "row",
}: TTabsProps) => {
	return (
		<div
			role="tablist"
			className={cn(styles.tablist, styles[direction])}
		>
			{itemIds.map((id) => (
				<UIButton
					key={id}
					size="medium"
					color="neutral"
					active={id === activeId}
					role="tab"
					aria-selected={id === activeId}
					onClick={onChange ? () => onChange(id) : undefined}
				>
					{renderTabContent(id)}
				</UIButton>
			))}
		</div>
	);
};
