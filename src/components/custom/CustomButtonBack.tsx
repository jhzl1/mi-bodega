import { ArrowBackIcon } from "@chakra-ui/icons";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface CustomButtonBackProps {
  isProtectedView?: boolean;
}

const CustomButtonBack: FC<CustomButtonBackProps> = ({ isProtectedView }) => {
  const navigate = useNavigate();

  const commonPosition = "top-10 left-14";
  const protectedViewPosition = "top-2";

  return (
    <button
      className={`absolute ${
        isProtectedView ? protectedViewPosition : commonPosition
      } bg-neutral-600 p-1 rounded-full flex justify-center items-center`}
      onClick={() => navigate(-1)}
    >
      <ArrowBackIcon w={6} h={6} />
    </button>
  );
};

export default CustomButtonBack;
