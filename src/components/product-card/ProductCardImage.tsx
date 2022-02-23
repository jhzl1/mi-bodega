interface ProductCardImageProps {
  url?: string;
  isImageDesc?: boolean;
}

export const ProductCardImage = ({
  url,
  isImageDesc,
}: ProductCardImageProps) => {
  const noImage = require("../../assets/img/no-image.png");

  return (
    <img
      src={url ? url : noImage}
      alt="No hay imagen"
      className={isImageDesc ? "w-full h-[32rem]" : "product-image"}
    />
  );
};
