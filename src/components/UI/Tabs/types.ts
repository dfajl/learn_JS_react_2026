export type TTabsProps = {
	itemIds: string[];
	activeId: string | null;
	onChange: (id: string) => void;
};
