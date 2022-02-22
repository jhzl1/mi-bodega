import { useEffect, useState } from "react";
import { Custom } from "../components/custom";
import EmptyResult from "../components/EmptyResult";
import GridLoading from "../components/GridLoading";
import { ProductCard } from "../components/product-card";
import { fetchRemoteData } from "../helpers/fetchRemoteData";
import { GetProductRes, Product } from "../interfaces/getProductsRes";
import { routes } from "../routes/routes";

const HomePage = () => {
  const { detailProduct } = routes;

  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await fetchRemoteData<GetProductRes>({
          endpoint: "/products/get",
          method: "GET",
        });
        setProducts(data.products);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
  }, []);
  return (
    <>
      <div className="mb-7">
        <Custom.Title> Mis productos </Custom.Title>
      </div>
      {products.length === 0 && <EmptyResult />}

      {isLoading && <GridLoading />}

      <div className="grid-home">
        {products.map(({ name, quantity, urlImage, id }, i) => (
          <ProductCard key={i} linkTo={detailProduct(id)}>
            <ProductCard.Image url={urlImage} />

            <ProductCard.Content quantity={quantity}>
              <ProductCard.Title> {name} </ProductCard.Title>
            </ProductCard.Content>
          </ProductCard>
        ))}
      </div>
    </>
  );
};

export default HomePage;
