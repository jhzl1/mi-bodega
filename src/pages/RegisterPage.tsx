import { useSelector } from "react-redux";
import { Custom } from "../components/custom";
import RegisterForm from "../components/forms/RegisterForm";
import { RootState } from "../store/store";

const RegisterPage = () => {
  const { errorMsg } = useSelector((state: RootState) => state.ui);

  return (
    <Custom.UVContainer>
      <div className="register-container relative">
        <Custom.ButtonBack />

        <Custom.Title> Registro </Custom.Title>
        {errorMsg && <Custom.Alert showPadding errorMsg={errorMsg} />}

        <RegisterForm />
      </div>
    </Custom.UVContainer>
  );
};

export default RegisterPage;
