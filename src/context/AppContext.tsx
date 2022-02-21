import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import AuthChecker from "../components/AuthChecker";

import { ChildrenJSX } from "../interfaces/childrenJsx";
import { store } from "../store/store";

const AppContext = ({ children }: ChildrenJSX) => {
  return (
    <Provider store={store}>
      <AuthChecker />
      <ChakraProvider>{children}</ChakraProvider>{" "}
    </Provider>
  );
};

export default AppContext;
