type FetchRemoteDataProps = {
  endpoint: string;
  method: "GET" | "POST" | "DELETE" | "PUT";
  payload: any;
};

export const fetchRemoteData = async ({
  endpoint,
  method,
  payload,
}: FetchRemoteDataProps) => {
  console.log({ endpoint, method, payload });
};
