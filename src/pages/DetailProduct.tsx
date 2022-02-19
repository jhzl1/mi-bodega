import { useParams } from "react-router-dom";
import { Custom } from "../components/custom";
import { ProductCard } from "../components/product-card";

const DetailProduct = () => {
  const params = useParams();

  console.log(params.productId);
  return (
    <>
      <Custom.Title> Detalle del producto </Custom.Title>

      <div className="grid grid-cols-2 mt-5 gap-4">
        <ProductCard.Image />

        <div>
          <span>Nombre del producto</span>
          <span>Nombre del producto</span>
          <span>Nombre del producto</span>
          <span>Nombre del producto</span>
        </div>
      </div>
    </>
  );
};

export default DetailProduct;
