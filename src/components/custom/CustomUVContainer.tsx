import { ChildrenJSX } from "../../interfaces/childrenJsx";

const CustomUVContainer = ({ children }: ChildrenJSX) => {
  return (
    <div className="unprotected-view">
      <img
        src={require("../../assets/img/logo_large.png")}
        alt=""
        className="logo-page"
      />
      {children}
    </div>
  );
};

export default CustomUVContainer;
