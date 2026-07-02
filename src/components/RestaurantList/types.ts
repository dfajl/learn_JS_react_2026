export type TRestaurant = {
	id: string;
	name: string;
	menu: TMenuItem[];
	reviews: TReviewItem[];
};

export type TMenuItem = {
	id: string;
	name: string;
	price: number;
	ingredients: string[];
};

export type TReviewItem = {
	id: string;
	user: string;
	text: string;
	rating: number;
};