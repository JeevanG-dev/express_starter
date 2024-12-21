import express from "express";
import { cartController } from "../controllers/cartController.js";
import { isLoggedIn } from "../validation/authValidation.js";

const router = express.Router();

router.get("/", isLoggedIn, cartController);

export default router;
