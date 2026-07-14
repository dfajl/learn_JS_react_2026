import { use } from "react";
import { ThemeContext } from "./ThemeContext.tsx";

export const useTheme = () => use(ThemeContext);
