
import { getCart } from "../Repository/cartRepository.js";
import { productRepository } from "../Repository/productRepository.js";

export const cartService = {
  getCartService: async (userId) => {
    try {
      const response = await getCart(userId);

      if (!response) {
        throw new Error("cart not available");
      }

      return response;
    } catch (error) {
      console.log(error);

      throw error;
    }
  },
  addProductToCartService: async (userId, productId) => {
    const cart = await getCart(userId);
    const product = await productRepository.getProductById(productId);

    if (!product) {
      throw new Error("Product");
    }

    if (!product.inStock && !product.quantity <= 0) {
      throw new Error("not in stock");
    }

    let foundProduct = false;
    cart.items.forEach((item) => {
      if (item.products.toString() === productId) {
        item.quantity += 1;
        foundProduct = true;
      }
    });
    if (!foundProduct) {
      cart.items.push({
        products: productId,
        quantity: 1,
      });
    }

    await cart.save();

    return cart;
  },
};
