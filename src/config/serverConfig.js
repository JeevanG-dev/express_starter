import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT || 3000

export const MONGO_DB = process.env.MONGO_DB
