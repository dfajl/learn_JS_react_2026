import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./Providers/ThemeProvider";
import { UserProvider } from "./Providers/UserProvider";
import { ReduxProvider } from "./Providers/ReduxProvider";
import { router } from "../router.tsx";

export const App = () => {
	return (
		<ReduxProvider>
			<ThemeProvider>
				<UserProvider>
					<RouterProvider router={router} />
				</UserProvider>
			</ThemeProvider>
		</ReduxProvider>
	);
};
