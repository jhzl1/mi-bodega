import { Custom } from "../components/custom";
import LoginForm from "../components/forms/LoginForm";
import { routes } from "../routes/routes";

const LoginPage = () => {
  const { register } = routes;

  return (
    <Custom.UVContainer>
      <div className="unprotected-container">
        <div className="flex flex-col items-center p-8">
          <Custom.Title>Iniciar sesión</Custom.Title>
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
            className="object-cover h-full"
          />
        </div>
      </div>
    </Custom.UVContainer>
  );
};

export default LoginPage;
