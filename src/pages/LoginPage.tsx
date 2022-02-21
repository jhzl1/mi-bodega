import { useSelector } from "react-redux";
import { Custom } from "../components/custom";
import LoginForm from "../components/forms/LoginForm";
import { routes } from "../routes/routes";
import { RootState } from "../store/store";

const LoginPage = () => {
  const { register } = routes;

  const { errorMsg } = useSelector((state: RootState) => state.ui);

  return (
    <Custom.UVContainer>
      <div className="unprotected-container">
        <div className="form-login-container">
          <Custom.Title>Iniciar sesión</Custom.Title>
          {errorMsg && <Custom.Alert showPadding errorMsg={errorMsg} />}

          <LoginForm />

          <div>
            <span>¿No tiene cuenta? </span>
            <Custom.Link to={register}>Regístrese</Custom.Link>
          </div>
        </div>
        <div className="h-full">
          <img
            src={require("../assets/img/background.jpg")}
            alt=""
            className="img-login"
          />
        </div>
      </div>
    </Custom.UVContainer>
  );
};

export default LoginPage;
