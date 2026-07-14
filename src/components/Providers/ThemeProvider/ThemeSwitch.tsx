import { UISwitcher } from "../../UI/Switcher/UISwitcher.tsx";
import { useTheme } from "./useTheme.ts";

export const ThemeSwitch = () => {
	const { theme, setTheme } = useTheme();
	const isDark = theme === "dark";

	return (
		<UISwitcher
			checked={isDark}
			label={isDark ? "Dark" : "Light"}
			aria-label="Toggle theme"
			onChange={(checked) => setTheme(checked ? "dark" : "light")}
		/>
	);
};
