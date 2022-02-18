import * as Yup from "yup";
import { regexEmail, regexPassword } from "../helpers/regex";

export const initValues = {
  fullName: "",
  email: "",
  password: "",
  repeatPassword: "",
};

export const validationSchema = Yup.object({
  fullName: Yup.string()
    .required("El nombre completo es requerido")
    .min(5, "El nombre es muy corto")
    .max(25, "El nombre es muy largo"),
  email: Yup.string()
    .email("No es un email válido")
    .required("El email es requerido")
    .min(6, "El email es muy corto")
    .matches(regexEmail, "No es un email válido"),
  password: Yup.string()
    .required("La contraseña es requerida")
    .min(7, "La contraseña es muy corta")
    .max(20, "La contraseña es muy larga")
    .matches(regexPassword, "La contraseña no cumple con los requerimientos")
    .oneOf([Yup.ref("repeatPassword")], "Las contraseñas no coinciden"),
  repeatPassword: Yup.string()
    .required("La contraseña es requerida")
    .matches(regexPassword, "La contraseña no cumple con los requerimientos")
    .oneOf([Yup.ref("password")], "Las contraseñas no coinciden"),
});
