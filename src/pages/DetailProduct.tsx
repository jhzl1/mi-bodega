import { ArrowBackIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { startLoading, stopLoading } from "../actions/ui";
import { Custom } from "../components/custom";
import DescriptionProduct from "../components/DescriptionProduct";
import DialogDeleteProduct from "../components/DialogDeleteProduct";
import EditProductForm from "../components/forms/EditProductForm";
import { ProductCard } from "../components/product-card";
import useFetchRemoteData from "../hooks/useFetchRemoteData";
import { Product } from "../interfaces/getProductsRes";
import { routes } from "../routes/routes";

const DetailProduct = () => {
  const params = useParams();

  const { state } = useLocation();
  const dispatch = useDispatch();

  const { home } = routes;

  const { urlImage } = state as Product;

  const fetch = useFetchRemoteData({
    endpoint: `/products/delete/${params.productId}`,
    method: "DELETE",
    toastTitle: "Producto eliminado",
    toastDescription: "El producto se ha eliminado exitosamente",
    navigate: home,
  });

  const [showFormEdit, setShowFormEdit] = useState(false);
  const [product, setProductUpdated] = useState<Product>(state as never);
  const [isOpen, setIsOpen] = useState(false);

  const onCloseDialog = async () => {
    setIsOpen(false);

    dispatch(startLoading());
    await fetch({});

    dispatch(stopLoading());
  };

  const onlyCloseDialog = () => {
    setIsOpen(false);
  };

  const hideForm = async (productUpdated: Product) => {
    setProductUpdated(productUpdated);

    setShowFormEdit(false);
  };

  return (
    <>
      <Custom.HeaderPage>Detalle del producto</Custom.HeaderPage>
      <div className="grid  grid-cols-1 lg:grid-cols-2 mt-4 gap-7">
        <ProductCard.Image isImageDesc url={urlImage} />

        <div className="mt-4 lg:mt-0">
          {showFormEdit ? (
            <EditProductForm
              productValues={product}
              hideForm={hideForm}
              productId={params.productId as never}
            />
          ) : (
            <DescriptionProduct product={product} />
          )}

          <div className={`mt-2`}>
            <Button
              colorScheme="blue"
              leftIcon={showFormEdit ? <ArrowBackIcon /> : <EditIcon />}
              mb={4}
              width="full"
              onClick={() => setShowFormEdit(!showFormEdit)}
            >
              {showFormEdit ? "Atras" : " Editar"}
            </Button>
          </div>

          {!showFormEdit && (
            <Button
              colorScheme="red"
              width="full"
              onClick={() => setIsOpen(true)}
              leftIcon={<DeleteIcon />}
            >
              Eliminar
            </Button>
          )}

          <DialogDeleteProduct
            isOpen={isOpen}
            onClose={onCloseDialog}
            onlyCloseDialog={onlyCloseDialog}
          />
        </div>
      </div>
    </>
  );
};

export default DetailProduct;
