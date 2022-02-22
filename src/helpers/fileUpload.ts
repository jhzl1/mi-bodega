import axios from "axios";
import { CloudinaryRes } from "../interfaces/cloudinaryRes";

export const fileUpload = async (file: any) => {
  const apiUrl = process.env.REACT_APP_UPLOAD_IMAGE_API;

  const formData = new FormData();

  formData.append("upload_preset", "mi-bodega-app");
  formData.append("file", file);

  try {
    const { data } = await axios.post<CloudinaryRes>(
      apiUrl as string,
      formData
    );
    if (data) {
      return data.secure_url;
    }
  } catch (error) {
    console.log(error);
  }
};
