import { ChildrenJSX } from "../../interfaces/childrenJsx";

export const Navbar = ({ children }: ChildrenJSX) => {
  return (
    <div className="h-20 py-5 px-20 shadow-md shadow-black/40 flex justify-between  items-center">
      {children}
    </div>
  );
};
