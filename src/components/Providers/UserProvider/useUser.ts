import { use } from "react";
import { UserContext } from "./UserContext.tsx";

export const useUser = () => use(UserContext);
