import { Form } from "formik";
import { ChildrenJSX } from "../../interfaces/childrenJsx";

interface CustomFormProps {
  noPadding?: boolean;
}

const CustomForm = ({ children, noPadding }: CustomFormProps & ChildrenJSX) => {
  return (
    <Form
      className={`w-full  ${
        noPadding ? "px-0 " : "px-5"
      } flex flex-col justify-center items-center"`}
    >
      {children}
    </Form>
  );
};

export default CustomForm;
