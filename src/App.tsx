import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import AppContext from "./context/AppContext";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoutes from "./routes/PublicRoutes";
import { publicDir, routes } from "./routes/routes";

const App = () => {
  const { home } = routes;

  return (
    <AppContext>
      <BrowserRouter>
        <Routes>
          {publicDir.map(({ element: Element, path }, i) => (
            <Route
              key={i}
              element={<PublicRoutes>{Element}</PublicRoutes>}
              path={path}
            />
          ))}

          <Route
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
            path={home}
          />
        </Routes>
      </BrowserRouter>
    </AppContext>
  );
};

export default App;
