import { appRoutes } from "./privateRoutes/appRoutes";
import { authRoutes } from "./authRoutes";

export const allRoutes = [...authRoutes, ...appRoutes];
