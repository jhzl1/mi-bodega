import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
  Textarea,
} from "@chakra-ui/react";
import { useField } from "formik";
import { FC, useState } from "react";

type TypeInput = "text" | "password";

interface CustomInputProps extends InputProps {
  placeholder: string;
  helperText?: string;
  name: string;
  renderTextArea?: boolean;
}

const CustomInput: FC<CustomInputProps> = ({
  placeholder,
  helperText,
  renderTextArea,
  ...props
}) => {
  const [field, { error, touched }] = useField(props as never);

  const inputStyles = {
    border: 0,
    bgColor: "#525252",
    borderRadius: 3,
    placeholder,
  };

  const [typeInput, setTypeInput] = useState<TypeInput>("password");

  const handleShowPassword = () => {
    if (typeInput === "text") {
      setTypeInput("password");
    } else {
      setTypeInput("text");
    }
  };
  return (
    <FormControl my={2} isInvalid={!!error && touched}>
      <FormLabel>{placeholder}</FormLabel>
      <InputGroup>
        {renderTextArea ? (
          <Textarea {...field} {...inputStyles} />
        ) : (
          <Input
            {...inputStyles}
            {...props}
            {...field}
            type={props.type === "password" ? typeInput : props.type}
          />
        )}

        {props.type === "password" && (
          <InputRightElement>
            <button
              onClick={handleShowPassword}
              type="button"
              className="flex justify-center"
            >
              {typeInput === "password" ? <ViewIcon /> : <ViewOffIcon />}
            </button>
          </InputRightElement>
        )}
      </InputGroup>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
      {error && touched && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  );
};

export default CustomInput;
