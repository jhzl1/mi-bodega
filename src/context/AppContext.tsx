import { ChakraProvider } from "@chakra-ui/react";
import { ChildrenJSX } from "../interfaces/childrenJsx";

const AppContext = ({ children }: ChildrenJSX) => {
  return <ChakraProvider>{children}</ChakraProvider>;
};

export default AppContext;
