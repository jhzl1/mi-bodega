import { ChildrenJSX } from "../../interfaces/childrenJsx";

const CustomUVContainer = ({ children }: ChildrenJSX) => {
  return (
    <div className="unprotected-view">
      <img
        src={require("../../assets/img/logo_large.png")}
        alt=""
        className="w-1/6 mb-10"
      />
      {children}
    </div>
  );
};

export default CustomUVContainer;
