import { Button } from "@chakra-ui/react";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { ChildrenJSX } from "../../interfaces/childrenJsx";

interface ProductCardProps {
  children: ChildrenJSX | ReactNode;
  linkTo: string;
}

export const ProductCard = ({ linkTo, children }: ProductCardProps) => {
  const navigate = useNavigate();
  return (
    <div className="bg-neutral-700 rounded p-5  flex flex-col justify-between">
      <div className="flex flex-col mb-5">{children}</div>

      <Button colorScheme="purple" onClick={() => navigate(linkTo)}>
        Ver detalles
      </Button>
    </div>
  );
};
