import {v2 as cloudinary} from "cloudinary";
import {
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_NAME,
  CLOUDINARY_API_SECRET,
} from "./serverConfig.js";

//configuring cloudinary



cloudinary.config({
  cloud_name: CLOUDINARY_API_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

export default cloudinary;
