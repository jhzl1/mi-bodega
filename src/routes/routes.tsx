import CreateProduct from "../pages/CreateProduct";
import DetailProduct from "../pages/DetailProduct";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

interface DirRoutes {
  path: string;
  element: JSX.Element;
}

export const routes = {
  login: "/login",
  register: "/register",
  home: "/*",
  dashboard: "/",
  createProduct: "/createProduct",
  detailProduct: (productId: string = ":productId") =>
    `/detailProduct/${productId}`,
};

export const publicDir: DirRoutes[] = [
  { path: routes.login, element: <LoginPage /> },
  { path: routes.register, element: <RegisterPage /> },
];

export const privateDir: DirRoutes[] = [
  { path: routes.home, element: <HomePage /> },
  { path: routes.createProduct, element: <CreateProduct /> },
  { path: routes.detailProduct(), element: <DetailProduct /> },
];
