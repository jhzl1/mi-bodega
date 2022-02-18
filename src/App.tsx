import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import AppContext from "./context/AppContext";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { routes } from "./routes/routes";

const App = () => {
  const { login, register, home } = routes;

  return (
    <AppContext>
      <BrowserRouter>
        <Routes>
          <Route element={<LoginPage />} path={login} />
          <Route element={<RegisterPage />} path={register} />
          <Route
            element={
              <>
                <Dashboard />
              </>
            }
            path={home}
          />
        </Routes>
      </BrowserRouter>
    </AppContext>
  );
};

export default App;
