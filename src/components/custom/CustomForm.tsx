import { Form } from "formik";
import { ChildrenJSX } from "../../interfaces/childrenJsx";

const CustomForm = ({ children }: ChildrenJSX) => {
  return (
    <Form className="w-full px-5 flex flex-col justify-center items-center">
      {children}
    </Form>
  );
};

export default CustomForm;
