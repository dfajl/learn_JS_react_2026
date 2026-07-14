export type TTheme = "light" | "dark";

export type TThemeContext = {
	theme: TTheme;
	setTheme: (theme: TTheme) => void;
};