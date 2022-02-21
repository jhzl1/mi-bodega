import miBodegaApi from "../api/miBodegaApi";

type FetchRemoteDataProps = {
  endpoint: string;
  method: "GET" | "POST" | "DELETE" | "PUT";
  payload: any;
};

export const fetchRemoteData = <T>({
  endpoint,
  method,
  payload,
}: FetchRemoteDataProps) => {
  // console.log({ endpoint, method, payload });

  return miBodegaApi.request<T>({
    method,
    url: endpoint,
    data: payload,
  });
};
