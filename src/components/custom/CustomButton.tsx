import { Button, ButtonProps } from "@chakra-ui/react";
import { FC } from "react";

interface CustomButtonProps extends ButtonProps {
  title: string;
  colorScheme?: string;
}

const CustomButton: FC<CustomButtonProps> = ({
  colorScheme = "messenger",
  title,
  ...props
}) => {
  return (
    <Button colorScheme={colorScheme} {...props}>
      {title}
    </Button>
  );
};

export default CustomButton;
