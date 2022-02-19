import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../store/store";
import { routes } from "./routes";

const PublicRoutes = ({ children }: { children: JSX.Element }) => {
  const { dashboard } = routes;
  const { status } = useSelector((state: RootState) => state.auth);

  return status === "not-authenticated" ? (
    children
  ) : (
    <Navigate to={dashboard} />
  );
};

export default PublicRoutes;
