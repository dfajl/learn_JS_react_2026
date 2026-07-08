export type TTabItem = {
	id: string;
	label: string;
};

export type TTabsProps = {
	items: TTabItem[];
	activeId: string | null;
	onChange: (id: string) => void;
	style?: React.CSSProperties;
};
