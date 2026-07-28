export type TRestaurant = {
	id: string;
	name: string;
	description: string;
	img: string;
	menu: string[];
	reviews: string[];
};

export type TDish = {
	id: string;
	name: string;
	price: number;
	ingredients: string[];
};

export type TReview = {
	id: string;
	userId: string;
	text: string;
	rating: number;
};

export type TUser = {
	id: string;
	name: string;
};

export type TEntitiesState<T> = {
	entities: Record<string, T>;
	ids: string[];
};
