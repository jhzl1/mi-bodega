import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeError } from "../actions/ui";
import { Custom } from "../components/custom";
import RegisterForm from "../components/forms/RegisterForm";
import { RootState } from "../store/store";

const RegisterPage = () => {
  const { errorMsg } = useSelector((state: RootState) => state.ui);

  const dispatch = useDispatch();

  useEffect(() => {
    if (errorMsg) {
      dispatch(removeError());
    }
    //eslint-disable-next-line
  }, []);

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
