import About from "../../pages/About";
import Contact from "../../pages/Contact";
import Home from "../../pages/Home";

export const appRoutes = [
  {
    id: "home",
    path: "/",
    element: Home,
    hasLayout: false,
    isPrivate: true,
  },
  {
    id: "about",
    path: "/about-us",
    element: About,
    hasLayout: true,
    isPrivate: true,
  },
  {
    id: "contact",
    path: "/contact-us",
    element: Contact,
    hasLayout: true,
    isPrivate: true,
  },
  {
    id: "blog",
    path: "/blog",
    element: () => <div>Blog</div>,
    hasLayout: true,
    isPrivate: true,
  },
];
