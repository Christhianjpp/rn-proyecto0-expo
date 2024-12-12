const cloudUrl = "https://api.cloudinary.com/v1_1/dl6oea68u/image/upload";
import { ImagePickerAsset } from "expo-image-picker";

interface PropsUser {
  imgforUpload: any;
  opendFrom: string;
}
export const uploadImageCloudinaryUser = async ({
  imgforUpload,
  opendFrom,
}: PropsUser) => {
  const { uri, type } = imgforUpload;
  const source = {
    uri,
    type,
    name: "fileName",
  };
  console.log({ source });

  const data = new FormData();
  data.append("file", imgforUpload); // Asegúrate de que 'source' cumpla con el tipo esperado
  data.append("upload_preset", "conocepanama");
  data.append("cloud_name", "dl6oea68u");
  data.append("folder", opendFrom);
  console.log({ data });

  try {
    const resp = await fetch(cloudUrl, {
      method: "POST",
      body: data,
    });
    console.log({ resp });

    if (resp.status === 200) {
      const cloudResp = await resp.json();
      console.log(cloudResp.secure_url);

      return cloudResp.secure_url;
    }
    return "";
  } catch (error) {
    console.log(error);
  }
};
