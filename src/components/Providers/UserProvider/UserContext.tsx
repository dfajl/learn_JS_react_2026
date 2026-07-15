import { createContext } from "react";
import type { TUserContext } from "./types.ts";

export const UserContext = createContext<TUserContext>({
	user: null,
	login: () => {},
	logout: () => {},
});
