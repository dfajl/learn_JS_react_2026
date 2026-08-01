export type TUser = {
	name: string;
	id: string;
};

export type TUserContext = {
	user: TUser | null;
	login: (name?: string) => void;
	logout: () => void;
};
