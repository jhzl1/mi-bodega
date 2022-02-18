import { Custom } from "../components/custom";
import RegisterForm from "../components/forms/RegisterForm";

const RegisterPage = () => {
  return (
    <Custom.UVContainer>
      <div className="register-container relative">
        <Custom.ButtonBack />

        <Custom.Title> Registro </Custom.Title>

        <RegisterForm />
      </div>
    </Custom.UVContainer>
  );
};

export default RegisterPage;
