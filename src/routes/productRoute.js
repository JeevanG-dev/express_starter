import express from "express";
import { createProduct } from "../controllers/productController.js";
import { uploader } from "../middlewares/multerMiddleware.js";

const router = express.Router();

router.post("/", uploader.single('productImage'), createProduct);

export default router;
