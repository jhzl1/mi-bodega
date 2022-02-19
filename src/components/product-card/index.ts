import { ProductCard as ProductCardHOC } from "./ProductCard";
import { ProductCardContent } from "./ProductCardContent";
import { ProductCardImage } from "./ProductCardImage";
import { ProductCardTitle } from "./ProductCardTitle";

export const ProductCard = Object.assign(ProductCardHOC, {
  Image: ProductCardImage,
  Content: ProductCardContent,
  Title: ProductCardTitle,
});
