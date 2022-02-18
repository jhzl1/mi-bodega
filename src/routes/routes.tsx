import HomePage from "../pages/HomePage";

interface DirRoutes {
  path: string;
  element: JSX.Element;
}

export const routes = {
  login: "/login",
  register: "/register",
  home: "/",
};

export const privateDir: DirRoutes[] = [
  { path: routes.home, element: <HomePage /> },
];
