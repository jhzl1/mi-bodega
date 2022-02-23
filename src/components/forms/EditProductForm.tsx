import { Formik } from "formik";
import { FC } from "react";
import useFetchRemoteData from "../../hooks/useFetchRemoteData";
import { Product } from "../../interfaces/getProductsRes";
import {
  UpdatedProduct,
  UpdatedProductRes,
} from "../../interfaces/updatedProductRes";
import { validationSchema } from "../../validations/createFormProduct";
import { Custom } from "../custom";

interface EditProductFormProps {
  productValues: Product;
  hideForm: (productUpdated: UpdatedProduct) => void;
  productId: string;
}

const EditProductForm: FC<EditProductFormProps> = ({
  productValues,
  hideForm,
  productId,
}) => {
  const fetch = useFetchRemoteData({
    endpoint: `/products/update/${productId}`,
    method: "PUT",
    toastTitle: "Producto editado exitosamente",
  });

  const handleSubmit = async (data: any) => {
    const res = (await fetch(data)) as UpdatedProductRes;

    hideForm(res.updatedProduct);
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={productValues}
      validationSchema={validationSchema}
    >
      {({ isSubmitting, dirty }) => (
        <Custom.Form noPadding>
          <Custom.Input name="name" placeholder="Nombre" autoComplete="off" />
          <Custom.Input name="price" placeholder="Precio" type="number" />

          <Custom.Input
            name="quantity"
            type="number"
            placeholder="Cantidad en existencia"
          />

          <Custom.Input
            name="description"
            renderTextArea
            placeholder="Descripción"
          />

          {isSubmitting ? (
            <Custom.LoadingIndicator />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
              <Custom.Button
                title="Resetear campos"
                width="full"
                my={2}
                colorScheme="purple"
                type="reset"
                disabled={!dirty}
              />
              <Custom.Button
                title="Actualizar producto"
                width="full"
                colorScheme="green"
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

export default EditProductForm;
