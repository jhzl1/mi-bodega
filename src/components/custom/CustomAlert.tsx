import { Alert, AlertIcon } from "@chakra-ui/react";
import { FC } from "react";

interface CustomAlertProps {
  errorMsg: string;
  showPadding?: boolean;
}

const CustomAlert: FC<CustomAlertProps> = ({ errorMsg, showPadding }) => {
  return (
    <div className={`${showPadding && "px-5"} w-full my-2`}>
      <Alert status="error" rounded="xl">
        <AlertIcon />
        <span className="text-neutral-700">{errorMsg}</span>
      </Alert>
    </div>
  );
};

export default CustomAlert;
