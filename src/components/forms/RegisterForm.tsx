import { Formik } from "formik";
import { helperTextPassword } from "../../helpers/const";
import { initValues, validationSchema } from "../../validations/registerForm";
import { Custom } from "../custom";

const RegisterForm = () => {
  const handleSubmit = (data: typeof initValues) => {
    console.log(data);
  };

  return (
    <Formik
      initialValues={initValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Custom.Form>
        <Custom.Input name="fullName" placeholder="Nombre completo" />
        <Custom.Input name="email" placeholder="Email" />
        <Custom.Input
          name="password"
          placeholder="Contraseña"
          helperText={helperTextPassword}
        />
        <Custom.Input name="repeatPassword" placeholder="Repita contraseña" />

        <Custom.Button title="Crear cuenta" width="full" my={2} type="submit" />
        <Custom.Button
          title="Limpiar campos"
          width="full"
          my={2}
          colorScheme="purple"
          type="reset"
        />
      </Custom.Form>
    </Formik>
  );
};

export default RegisterForm;
