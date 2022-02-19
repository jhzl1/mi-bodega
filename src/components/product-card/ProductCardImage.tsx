interface ProductCardImageProps {
  url?: string;
}

export const ProductCardImage = ({ url }: ProductCardImageProps) => {
  const noImage = require("../../assets/img/no-image.png");

  return <img src={url ? url : noImage} alt="No hay imagen" className="mb-2" />;
};
