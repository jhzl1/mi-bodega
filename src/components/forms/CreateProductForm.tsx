import { Formik } from "formik";
import useFetchRemoteData from "../../hooks/useFetchRemoteData";
import { routes } from "../../routes/routes";
import {
  initValues,
  validationSchema,
} from "../../validations/createFormProduct";
import { Custom } from "../custom";
import InputUploadImage from "../InputUploadImage";

const CreateProductForm = () => {
  const { home } = routes;

  const fetch = useFetchRemoteData({
    endpoint: "/products/create",
    method: "POST",
    toastTitle: "Producto creado exitosamente",
    toastDescription: "Ya puedes agregar otro!",
    navigate: home,
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
      {({ isSubmitting, setFieldValue, dirty }) => (
        <Custom.Form>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
            <Custom.Input name="name" placeholder="Nombre" autoComplete="off" />
            <Custom.Input name="price" placeholder="Precio" />

            <InputUploadImage setFieldValue={setFieldValue} />
            <Custom.Input
              name="quantity"
              type="number"
              placeholder="Cantidad en existencia"
            />

            <div className="col-span-1 lg:col-span-2">
              <Custom.Input
                name="description"
                renderTextArea
                placeholder="Descripción"
              />
            </div>
          </div>

          {isSubmitting ? (
            <Custom.LoadingIndicator />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              <Custom.Button
                title="Limpiar campos"
                width="full"
                my={2}
                colorScheme="purple"
                type="reset"
                disabled={!dirty}
              />
              <Custom.Button
                title="Crear producto"
                width="full"
                my={2}
                type="submit"
                disabled={!dirty}
              />
            </div>
          )}
        </Custom.Form>
      )}
    </Formik>
  );
};

export default CreateProductForm;
