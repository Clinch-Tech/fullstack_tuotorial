import Login from "../pages/Login";

export const authRoutes = [
  {
    id: "login-page",
    path: "/login",
    element: Login,
    hasLayout: false,
    isPrivate: false,
  },
];
