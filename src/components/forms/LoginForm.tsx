import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { signInEmailPassword } from "../../actions/auth";
import { RootState } from "../../store/store";
import { initValues, validationSchema } from "../../validations/loginForm";
import { Custom } from "../custom";

const LoginForm = () => {
  const dispatch = useDispatch();

  const state = useSelector((state: RootState) => state);

  // console.log(state);
  const handleSubmit = async ({ email, password }: typeof initValues) => {
    await dispatch(signInEmailPassword({ email, password }));
  };

  return (
    <Formik
      initialValues={initValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Custom.Form>
        <Custom.Input name="email" placeholder="Email" />
        <Custom.Input
          name="password"
          placeholder="Contraseña"
          type="password"
        />
        <Custom.Button
          title="Iniciar sesión"
          my={3}
          type="submit"
          width="full"
        />
      </Custom.Form>
    </Formik>
  );
};

export default LoginForm;
