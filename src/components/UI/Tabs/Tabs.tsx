import { UIButton } from "../Button/UIButton.tsx";
import type { TTabsProps } from "./types.ts";
import styles from "./Tabs.module.css";

export const Tabs = ({ items, activeId, onChange }: TTabsProps) => {
	return (
		<div role="tablist" className={styles.tablist}>
			{items.map((item) => (
				<UIButton
					key={item.id}
					size="medium"
					color="neutral"
					active={item.id === activeId}
					role="tab"
					aria-selected={item.id === activeId}
					onClick={() => onChange(item.id)}
				>
					{item.label}
				</UIButton>
			))}
		</div>
	);
};
