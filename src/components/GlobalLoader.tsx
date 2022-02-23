import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Custom } from "./custom";

const GlobalLoader = () => {
  const { isLoading } = useSelector((state: RootState) => state.ui);

  if (isLoading) {
    return (
      <div className="fixed h-screen flex justify-center items-center w-screen bg-black z-20 bg-neutral-800/70 backdrop-blur">
        <div className="bg-neutral-700 p-5 rounded w-60 flex flex-col justify-center items-center">
          <Custom.LoadingIndicator />

          <span className="mt-5">Cargando...</span>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default GlobalLoader;
