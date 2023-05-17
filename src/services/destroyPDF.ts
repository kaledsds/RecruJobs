import axios from "axios";
import { env } from "~/env.mjs";

interface deletePDFRes {
  secure_url: string;
}

export const deletePDFService = async (pdf: File) => {
  // File Data
  const fileData = new FormData();
  fileData.append("file", pdf);
  fileData.append("upload_preset", env.NEXT_PUBLIC_UPLOAD_PRESET);
  fileData.append("cloud_name", env.NEXT_PUBLIC_CLOUD_NAME);
  fileData.append("folder", "PDFs");

  try {
    const res = await axios.post<deletePDFRes>(
      `https://api.cloudinary.com/v1_1/${env.NEXT_PUBLIC_CLOUD_NAME}/image/destroy`,
      fileData
    );
    return res.data.secure_url;
  } catch (error) {
    return null;
  }
};
