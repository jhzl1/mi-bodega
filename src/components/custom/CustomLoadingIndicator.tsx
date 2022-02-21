import { Spinner } from "@chakra-ui/react";

const CustomLoadingIndicator = () => {
  return (
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.700"
      color="white"
      size="xl"
    />
  );
};

export default CustomLoadingIndicator;
