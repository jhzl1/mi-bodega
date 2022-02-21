import { ChildrenJSX } from "../../interfaces/childrenJsx";

interface CustomTitleProps extends ChildrenJSX {
  isBlack?: boolean;
}

const CustomTitle = ({ isBlack, children }: CustomTitleProps) => {
  return (
    <h2 className={`${isBlack && "text-neutral-900"} font-bold text-3xl my-2`}>
      {children}
    </h2>
  );
};

export default CustomTitle;
