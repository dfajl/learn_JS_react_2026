import type { ReactNode } from "react";

export type TTabsProps = {
	itemIds: string[];
	renderTabContent: (id: string) => ReactNode;
	activeId?: string | null;
	onChange?: (id: string) => void;
	direction?: "row" | "column";
};
