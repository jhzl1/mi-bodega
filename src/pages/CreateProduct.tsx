import { useSelector } from "react-redux";
import { Custom } from "../components/custom";
import CreateProductForm from "../components/forms/CreateProductForm";
import { RootState } from "../store/store";

const CreateProduct = () => {
  const { errorMsg } = useSelector((state: RootState) => state.ui);

  return (
    <div>
      <Custom.HeaderPage>Crear producto</Custom.HeaderPage>

      {errorMsg && <Custom.Alert showPadding errorMsg={errorMsg} />}

      <CreateProductForm />
    </div>
  );
};

export default CreateProduct;
