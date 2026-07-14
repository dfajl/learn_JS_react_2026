import { createContext } from "react";
import type { TThemeContext } from "./types.ts";

export const ThemeContext = createContext<TThemeContext>({
	theme: "light",
	setTheme: () => {},
});
