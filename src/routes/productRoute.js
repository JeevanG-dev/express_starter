import express from "express";
import {
  createProduct,
  deleteProductById,
  getProductById,
} from "../controllers/productController.js";
import { uploader } from "../middlewares/multerMiddleware.js";
import { isAdmin, isLoggedIn } from "../validation/authValidation.js";

const router = express.Router();

router.post(
  "/",
  isLoggedIn,
  isAdmin,
  uploader.single("productImage"),
  createProduct
);

router.get("/:id", getProductById);

router.delete("/:id", deleteProductById);

export default router;
