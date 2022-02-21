import { useScrollNavbar } from "../../hooks/useScrollNavbar";
import { ChildrenJSX } from "../../interfaces/childrenJsx";

export const Navbar = ({ children }: ChildrenJSX) => {
  const navbarBlur = useScrollNavbar();
  return (
    <div id="navbar" className={`${navbarBlur && "navbar-on-scroll "}`}>
      <div className="navbar-container">{children}</div>
    </div>
  );
};
