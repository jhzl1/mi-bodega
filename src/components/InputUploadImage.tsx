import { AttachmentIcon } from "@chakra-ui/icons";
import {
  Alert,
  AlertIcon,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { FC, useRef, useState } from "react";
import { fileUpload } from "../helpers/fileUpload";
import { Custom } from "./custom";

interface InputUploadImageProps {
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => void;
}

const InputUploadImage: FC<InputUploadImageProps> = ({ setFieldValue }) => {
  const inputFileRef = useRef(null) as any;

  const [loading, setLoading] = useState(false);
  const [imageWasUpload, setImageWasUpload] = useState(false);

  const [nameImage, setNameImage] = useState("");

  const inputStyles = {
    border: 0,
    bgColor: "#525252",
    borderRadius: 3,
  };

  const handlePickFile = () => {
    inputFileRef.current.click();
  };

  const handleInputChange = async ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    const file = target.files![0];

    if (file) {
      setNameImage(file.name);

      try {
        const imageUrl = await fileUpload(file);
        setFieldValue("urlImage", imageUrl);
        setImageWasUpload(true);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }
  };

  if (imageWasUpload) {
    return (
      <div className="flex items-end">
        <Alert status="success" textColor="gray.800" height="60px" rounded="md">
          <AlertIcon />
          Se ha subido la imagen {nameImage} exitosamente
        </Alert>
      </div>
    );
  }

  return (
    <FormControl my={2}>
      <FormLabel>Seleccione una imagen</FormLabel>
      <InputGroup>
        <div
          className="chakra-input css-5ho11v cursor-pointer flex items-center text-neutral-100/60"
          onClick={handlePickFile}
        >
          {loading && <Custom.LoadingIndicator size="md" />}

          <Input
            ref={inputFileRef}
            placeholder="Seleccione una imagen"
            type="file"
            accept="image/x-png,image/gif,image/jpeg"
            style={{ display: "none" }}
            onChange={handleInputChange}
            {...inputStyles}
          />
          {nameImage || "Nombre imagen"}
        </div>
        <InputRightElement>
          <AttachmentIcon />
        </InputRightElement>
      </InputGroup>
      <FormHelperText>Opcional</FormHelperText>
    </FormControl>
  );
};

export default InputUploadImage;
