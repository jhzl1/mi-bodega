import { ArrowBackIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

const CustomButtonBack = () => {
  const navigate = useNavigate();

  return (
    <button
      className="absolute top-10 left-14 bg-neutral-600 p-1 rounded-full flex justify-center items-center"
      onClick={() => navigate(-1)}
    >
      <ArrowBackIcon w={6} h={6} />
    </button>
  );
};

export default CustomButtonBack;
