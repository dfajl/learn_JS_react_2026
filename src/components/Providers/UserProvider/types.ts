export type TUser = {
	name: string;
};

export type TUserContext = {
	user: TUser | null;
	login: (name?: string) => void;
	logout: () => void;
};
