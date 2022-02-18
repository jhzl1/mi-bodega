import * as Yup from "yup";

export const initValues = {
  email: "",
  password: "",
};

export const validationSchema = Yup.object({
  email: Yup.string()
    .email("No es un email válido")
    .required("El email es requerido")
    .min(5, "No es un email válido"),
  password: Yup.string()
    .required("La contraseña es requerida")
    .min(7, "La contraseña es muy corta"),
});
