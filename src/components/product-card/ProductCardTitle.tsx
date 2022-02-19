import { ChildrenJSX } from "../../interfaces/childrenJsx";

export const ProductCardTitle = ({ children }: ChildrenJSX) => {
  return <h3 className="font-bold text-lg">{children}</h3>;
};
