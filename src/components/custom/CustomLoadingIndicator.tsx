import { Spinner, SpinnerProps } from "@chakra-ui/react";

const CustomLoadingIndicator = ({ size = "xl", ...props }: SpinnerProps) => {
  return (
    <div className="w-full flex justify-center items-center my-2">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.700"
        color="white"
        size={size}
        {...props}
      />
    </div>
  );
};

export default CustomLoadingIndicator;
