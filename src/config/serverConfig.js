import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT || 3000;

export const MONGO_DB = process.env.MONGO_DB;

export const JWT_SECRET = process.env.JWT_SECRET;

export const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY;

export const CLOUDINARY_API_NAME = process.env.CLOUDINARY_API_NAME;

export const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET;
