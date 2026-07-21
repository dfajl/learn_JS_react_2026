import { UIButton } from "../Button/UIButton.tsx";
import { TabLabel } from "./TabLabel.tsx";
import type { TTabsProps } from "./types.ts";
import styles from "./Tabs.module.css";

export const Tabs = ({ itemIds, activeId, onChange }: TTabsProps) => {
	return (
		<div role="tablist" className={styles.tablist}>
			{itemIds.map((id) => (
				<UIButton
					key={id}
					size="medium"
					color="neutral"
					active={id === activeId}
					role="tab"
					aria-selected={id === activeId}
					onClick={() => onChange(id)}
				>
					<TabLabel id={id} />
				</UIButton>
			))}
		</div>
	);
};
