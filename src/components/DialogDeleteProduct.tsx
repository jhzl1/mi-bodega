import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";
import { FC, useRef } from "react";

interface DialogDeleteProductProps {
  isOpen: boolean;
  onClose: () => void;
  onlyCloseDialog: () => void;
}

const DialogDeleteProduct: FC<DialogDeleteProductProps> = ({
  isOpen,
  onClose,
  onlyCloseDialog,
}) => {
  const cancelRef = useRef(null);

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      closeOnOverlayClick={false}
    >
      <AlertDialogOverlay>
        <AlertDialogContent bgColor="#262626">
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Borrar producto
          </AlertDialogHeader>

          <AlertDialogBody>
            ¿Está seguro de borrar este producto? Esta acción no se puede
            deshacer.
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button
              ref={cancelRef}
              colorScheme="blue"
              onClick={onlyCloseDialog}
            >
              Cancelar
            </Button>
            <Button colorScheme="red" onClick={onClose} ml={3}>
              Eliminar
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default DialogDeleteProduct;
