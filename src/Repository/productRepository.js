import { Product } from "../schemas/productSchema.js";

export const productRepository = {
  createProduct: async function (productDetails) {
    try {
      const product = await Product.create(productDetails);

      return product;
    } catch (error) {
      console.log(error);
    }
  },

  getProductById: async function (productId) {
    try {
      const product = await Product.findById(productId);
      return product;
    } catch (error) {
      console.log(error);
    }
  },

  deleteProductById: async function (productId) {
    try {
      const product = await Product.findByIdAndDelete(productId);
      return product;
    } catch (error) {
      console.log(error);
    }
  },
};
