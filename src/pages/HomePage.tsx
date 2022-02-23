import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLoading, stopLoading } from "../actions/ui";
import { Custom } from "../components/custom";
import EmptyResult from "../components/EmptyResult";
import GridLoading from "../components/GridLoading";
import { ProductCard } from "../components/product-card";
import { fetchRemoteData } from "../helpers/fetchRemoteData";
import { GetProductRes, Product } from "../interfaces/getProductsRes";
import { routes } from "../routes/routes";
import { RootState } from "../store/store";

const HomePage = () => {
  const { detailProduct } = routes;

  const dispatch = useDispatch();

  const { isLoading } = useSelector((state: RootState) => state.ui);

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      dispatch(startLoading());
      try {
        const { data } = await fetchRemoteData<GetProductRes>({
          endpoint: "/products/get",
          method: "GET",
        });
        setProducts(data.products);
      } catch (error) {
        console.log(error);
      }
      dispatch(stopLoading());
    };

    getProducts();
  }, [dispatch]);
  return (
    <>
      <div className="mb-7">
        <Custom.Title> Mis productos </Custom.Title>
      </div>
      {products.length === 0 && <EmptyResult />}

      {isLoading && <GridLoading />}

      <div className="grid-home">
        {products.map((product, i) => (
          <ProductCard
            key={i}
            product={product}
            linkTo={detailProduct(product.id)}
          >
            <ProductCard.Image url={product.urlImage} />

            <ProductCard.Content quantity={product.quantity}>
              <ProductCard.Title> {product.name} </ProductCard.Title>
            </ProductCard.Content>
          </ProductCard>
        ))}
      </div>
    </>
  );
};

export default HomePage;
