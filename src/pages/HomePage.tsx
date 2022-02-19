import { Custom } from "../components/custom";
import EmptyResult from "../components/EmptyResult";
import { ProductCard } from "../components/product-card";
import { routes } from "../routes/routes";

const HomePage = () => {
  const { detailProduct } = routes;

  return (
    <>
      <Custom.Title> Mis productos </Custom.Title>

      <EmptyResult />

      <div className="grid grid-cols-3 gap-4">
        <ProductCard linkTo={detailProduct("blue")}>
          <ProductCard.Image />

          <ProductCard.Content quantity={2}>
            <ProductCard.Title> Titulo de la tarjeta </ProductCard.Title>
          </ProductCard.Content>
        </ProductCard>
        <ProductCard linkTo="/register">
          <ProductCard.Image />

          <ProductCard.Content quantity={2}>
            <ProductCard.Title> Titulo de la tarjeta </ProductCard.Title>
          </ProductCard.Content>
        </ProductCard>
        <ProductCard linkTo="/register">
          <ProductCard.Image />

          <ProductCard.Content quantity={2}>
            <ProductCard.Title> Titulo de la tarjeta </ProductCard.Title>
          </ProductCard.Content>
        </ProductCard>
        <ProductCard linkTo="/register">
          <ProductCard.Image />

          <ProductCard.Content quantity={2}>
            <ProductCard.Title> Titulo de la tarjeta </ProductCard.Title>
          </ProductCard.Content>
        </ProductCard>
        <ProductCard linkTo="/register">
          <ProductCard.Image />

          <ProductCard.Content quantity={2}>
            <ProductCard.Title> Titulo de la tarjeta </ProductCard.Title>
          </ProductCard.Content>
        </ProductCard>
        <ProductCard linkTo="/register">
          <ProductCard.Image />

          <ProductCard.Content quantity={2}>
            <ProductCard.Title> Titulo de la tarjeta </ProductCard.Title>
          </ProductCard.Content>
        </ProductCard>
        <ProductCard linkTo="/register">
          <ProductCard.Image />

          <ProductCard.Content quantity={2}>
            <ProductCard.Title> Titulo de la tarjeta </ProductCard.Title>
          </ProductCard.Content>
        </ProductCard>
        <ProductCard linkTo="/register">
          <ProductCard.Image />

          <ProductCard.Content quantity={2}>
            <ProductCard.Title> Titulo de la tarjeta </ProductCard.Title>
          </ProductCard.Content>
        </ProductCard>
        <ProductCard linkTo="/register">
          <ProductCard.Image />

          <ProductCard.Content quantity={2}>
            <ProductCard.Title> Titulo de la tarjeta </ProductCard.Title>
          </ProductCard.Content>
        </ProductCard>
        <ProductCard linkTo="/register">
          <ProductCard.Image />

          <ProductCard.Content quantity={2}>
            <ProductCard.Title> Titulo de la tarjeta </ProductCard.Title>
          </ProductCard.Content>
        </ProductCard>
        <ProductCard linkTo="/register">
          <ProductCard.Image />

          <ProductCard.Content quantity={2}>
            <ProductCard.Title> Titulo de la tarjeta </ProductCard.Title>
          </ProductCard.Content>
        </ProductCard>
        <ProductCard linkTo="/register">
          <ProductCard.Image />

          <ProductCard.Content quantity={2}>
            <ProductCard.Title> Titulo de la tarjeta </ProductCard.Title>
          </ProductCard.Content>
        </ProductCard>
      </div>
    </>
  );
};

export default HomePage;
