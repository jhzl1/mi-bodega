import { FC } from "react";
import { formatMoney } from "../helpers/formatters";
import { Product } from "../interfaces/getProductsRes";

interface DescriptionProductProps {
  product: Product;
}

const DescriptionProduct: FC<DescriptionProductProps> = ({
  product: { description, name, price, quantity },
}) => {
  return (
    <>
      <div className="flex justify-between mb-3 bg-neutral-700 p-2">
        <span className="">Nombre del producto</span>
        <span className="font-bold">{name}</span>
      </div>
      <div className="flex justify-between mb-3 p-2">
        <span className="">Precio</span>
        <span className="font-bold">{formatMoney(price)}</span>
      </div>
      <div className="flex justify-between mb-3 bg-neutral-700 p-2">
        <span className="">Cantidad en existencia</span>
        <span className="font-bold">{quantity}</span>
      </div>
      <div className="flex justify-between mb-3 p-2">
        <span className="">Descripción</span>
        <span className="font-bold">{description}</span>
      </div>
    </>
  );
};

export default DescriptionProduct;
