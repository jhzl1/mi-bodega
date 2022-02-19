import { ChildrenJSX } from "../../interfaces/childrenJsx";

export const Navbar = ({ children }: ChildrenJSX) => {
  return <div id="navbar">{children}</div>;
};
