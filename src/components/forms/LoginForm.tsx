import { Formik } from "formik";
import { initValues, validationSchema } from "../../validations/loginForm";
import { Custom } from "../custom";

const LoginForm = () => {
  const handleSubmit = (data: typeof initValues) => {
    console.log(data);
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
