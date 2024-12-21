import express from "express";
import { addProductToCartController, cartController } from "../controllers/cartController.js";
import { isLoggedIn } from "../validation/authValidation.js";

const router = express.Router();

router.get("/", isLoggedIn, cartController);

router.post('/add/:productId', isLoggedIn, addProductToCartController)



export default router;
