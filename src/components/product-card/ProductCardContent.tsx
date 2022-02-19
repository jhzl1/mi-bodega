import { FC, ReactNode } from "react";
import { ChildrenJSX } from "../../interfaces/childrenJsx";

interface ProductCardContentProps {
  children: ChildrenJSX | ReactNode;
  quantity: number;
}

export const ProductCardContent: FC<ProductCardContentProps> = ({
  quantity,
  children,
}) => {
  return (
    <div className="flex justify-between items-center">
      {children}

      <span className="text-sm text-neutral-100/60">Cantidad: {quantity}</span>
    </div>
  );
};
