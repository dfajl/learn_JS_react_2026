import { useState } from "react";
import { ThemeContext } from "./ThemeContext.tsx";
import type { TTheme } from "./types.ts";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const [theme, setTheme] = useState<TTheme>("light");

	return (
		<ThemeContext value={{ theme, setTheme }}>
			{children}
		</ThemeContext>
	);
};
