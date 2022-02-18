import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  InputProps,
} from "@chakra-ui/react";
import { useField } from "formik";
import { FC } from "react";

interface CustomInputProps extends InputProps {
  placeholder: string;
  helperText?: string;
  name: string;
}

const CustomInput: FC<CustomInputProps> = ({
  placeholder,
  helperText,
  ...props
}) => {
  const [field, { error, touched }] = useField(props as never);

  const inputStyles = {
    border: 0,
    bgColor: "#525252",
    borderRadius: 3,
    placeholder,
  };

  return (
    <FormControl my={2} isInvalid={!!error && touched}>
      <FormLabel>{placeholder}</FormLabel>
      <Input {...inputStyles} {...props} {...field} />
      {helperText && !error && <FormHelperText>{helperText}</FormHelperText>}
      {error && touched && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  );
};

export default CustomInput;
