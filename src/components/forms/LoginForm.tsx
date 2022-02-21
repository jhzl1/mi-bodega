import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { signInEmailPassword } from "../../actions/auth";
import { removeError } from "../../actions/ui";
import { RootState } from "../../store/store";

import { initValues, validationSchema } from "../../validations/loginForm";
import { Custom } from "../custom";

const LoginForm = () => {
  const dispatch = useDispatch();

  const { errorMsg } = useSelector((state: RootState) => state.ui);

  const handleSubmit = async ({ email, password }: typeof initValues) => {
    if (errorMsg) {
      dispatch(removeError());
    }

    await dispatch(signInEmailPassword({ email, password }));
  };

  return (
    <Formik
      initialValues={initValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <>
          <Custom.Form>
            <Custom.Input name="email" placeholder="Email" />
            <Custom.Input
              name="password"
              placeholder="Contraseña"
              type="password"
            />

            {isSubmitting ? (
              <Custom.LoadingIndicator />
            ) : (
              <Custom.Button
                title="Iniciar sesión"
                my={3}
                type="submit"
                width="full"
              />
            )}

            <></>
          </Custom.Form>
        </>
      )}
    </Formik>
  );
};

export default LoginForm;
