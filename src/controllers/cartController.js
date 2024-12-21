import { cartService } from "../service/cartService.js";

export const cartController = async (req, res) => {
  try {
    const cart = await cartService.getCartService(req.user.id);

    return res.status(200).json({
      message: "successfully get the cart",
      data: cart,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || "Internal Server Error",
      success: false,
    });
  }
};

export const addProductToCartController = async (req, res) => {
  try {
    const cart = await cartService.addProductToCartService(req.user.id, req.params.productId);

    return res.status(200).json({
      message: "successfully add product to the cart",
      data: cart,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || "Internal Server Error",
      success: false,
    });
  }
};

