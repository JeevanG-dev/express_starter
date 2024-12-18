import { Product } from "../schemas/productSchema.js";

export const productRepository = async (productDetails) => {
  try {

    const response = await Product.create(productDetails);
    return response;


  } catch (error) {

    console.log(error);
  }
};

