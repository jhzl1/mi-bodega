import * as Yup from "yup";

export const initValues = {
  name: "",
  description: "",
  price: "",
  quantity: "",
  urlImage: "",
};

export const validationSchema = Yup.object({
  name: Yup.string()
    .required("El nombre del producto es requerido")
    .min(5, "El nombre del producto es muy corto")
    .max(30, "El nombre del producto es muy largo"),
  description: Yup.string()
    .required("La descripción del producto es requerida")
    .min(5, "La descripción del producto es muy corta")
    .max(50, "La descripción del producto es muy larga"),
  price: Yup.number()
    .required("El precio es requerido")
    .moreThan(0, "El precio debe ser mayor a 0")
    .lessThan(1000, "El precio debe ser menor a 100")
    .typeError("No es un número"),
  quantity: Yup.number()
    .required("La cantidad es requerida")
    .moreThan(0, "La cantidad debe ser mayor a 0")
    .lessThan(1000, "No puede agregar mas de 1000 unidades")
    .typeError("No es un número"),
});
