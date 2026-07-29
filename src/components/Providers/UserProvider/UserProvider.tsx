import { useState } from "react";
import { UserContext } from "./UserContext.tsx";
import type { TUser } from "./types.ts";

const MOCK_USER_NAME = "Alex";

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
	const [currentUser, setCurrentUser] = useState<TUser | null>(null);

	const signIn = (name = MOCK_USER_NAME) => {
		setCurrentUser({ name, id: "1" });
	};

	const signOut = () => {
		setCurrentUser(null);
	};

	return (
		<UserContext value={{ user: currentUser, login: signIn, logout: signOut }}>
			{children}
		</UserContext>
	);
};
