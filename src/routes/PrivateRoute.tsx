import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../store/store";
import { routes } from "./routes";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { login } = routes;
  const { status } = useSelector((state: RootState) => state.auth);

  return status === "is-authenticated" ? children : <Navigate to={login} />;
};

export default PrivateRoute;
