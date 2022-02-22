import { Formik } from "formik";

import { helperTextPassword } from "../../helpers/const";
import { routes } from "../../routes/routes";
import { initValues, validationSchema } from "../../validations/registerForm";
import { Custom } from "../custom";
import useFetchRemoteData from "../../hooks/useFetchRemoteData";

const RegisterForm = () => {
  const { login } = routes;

  const fetch = useFetchRemoteData({
    endpoint: "/auth/newuser",
    method: "POST",
    toastTitle: "La cuenta se ha creado exitosamente",
    toastDescription: "Puedes ingresar ahora mismo con tus credenciales",
    navigate: login,
  });

  const handleSubmit = async (data: typeof initValues) => {
    await fetch(data);
  };

  return (
    <Formik
      initialValues={initValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ isSubmitting }) => (
        <Custom.Form>
          <Custom.Input name="fullName" placeholder="Nombre completo" />
          <Custom.Input name="email" placeholder="Email" />
          <Custom.Input
            name="password"
            placeholder="Contraseña"
            helperText={helperTextPassword}
            type="password"
          />
          <Custom.Input
            name="repeatPassword"
            placeholder="Repita contraseña"
            type="password"
          />

          {isSubmitting ? (
            <Custom.LoadingIndicator />
          ) : (
            <>
              <Custom.Button
                title="Crear cuenta"
                width="full"
                my={2}
                type="submit"
              />
              <Custom.Button
                title="Limpiar campos"
                width="full"
                my={2}
                colorScheme="purple"
                type="reset"
              />
            </>
          )}
        </Custom.Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
