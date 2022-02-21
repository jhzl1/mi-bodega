import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL;

const miBodegaApi = axios.create({
  baseURL,
});

export default miBodegaApi;
