import { useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addError, removeError } from "../actions/ui";
import { fetchRemoteData } from "../helpers/fetchRemoteData";
import { OkRes } from "../interfaces/okRes";
import { RootState } from "../store/store";

interface UseFetchRemoteData {
  navigate?: string;
  toastTitle: string;
  toastDescription?: string;
  endpoint: string;
  method: "POST" | "PUT" | "DELETE";
}

const useFetchRemoteData = ({
  endpoint,
  method,
  navigate,
  toastTitle,
  toastDescription,
}: UseFetchRemoteData) => {
  const goTo = useNavigate();

  const toast = useToast();

  const dispatch = useDispatch();

  const { errorMsg } = useSelector((state: RootState) => state.ui);

  const fetch = async (payload: any) => {
    if (errorMsg) {
      dispatch(removeError());
    }

    try {
      const { data: resData } = await fetchRemoteData<OkRes>({
        endpoint,
        method,
        payload,
      });

      if (resData.ok) {
        toast({
          title: toastTitle,
          description: toastDescription,
          status: "success",
          duration: 5000,
          position: "top",
          isClosable: true,
        });
      }

      if (navigate) {
        goTo(navigate);
      }
      return resData;
    } catch (error: any) {
      const errorMsg = error.response.data.msg;
      dispatch(addError(errorMsg));
    }
  };

  return fetch;
};

export default useFetchRemoteData;
