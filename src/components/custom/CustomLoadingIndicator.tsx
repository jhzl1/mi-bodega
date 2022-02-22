import { Spinner, SpinnerProps } from "@chakra-ui/react";

const CustomLoadingIndicator = ({ size = "xl", ...props }: SpinnerProps) => {
  return (
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.700"
      color="white"
      size={size}
      {...props}
    />
  );
};

export default CustomLoadingIndicator;
