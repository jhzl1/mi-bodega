import { routes } from "../routes/routes";
import { Custom } from "./custom";

const EmptyResult = () => {
  const { createProduct } = routes;

  return (
    <div className="w-full flex justify-center bg-neutral-700 p-10 rounded my-10">
      <span className="mr-1">
        No se han encontrado productos. Para registrar uno haga clic
      </span>
      <Custom.Link to={createProduct}> aqui </Custom.Link>
    </div>
  );
};

export default EmptyResult;
