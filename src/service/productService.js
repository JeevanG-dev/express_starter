import cloudinary from "../config/cloudinaryConfig.js";
import { productRepository } from "../Repository/productRepository.js";
import fs from "fs/promises";

export const productService = async (productDetails) => {
  const imgPath = productDetails.imagePath;

  if (imgPath) {
    try {
      const upd = await cloudinary.uploader.upload(imgPath);
      var productImage = upd.secure_url;
      await fs.unlink(imgPath);
    } catch (error) {
      throw { message: "not able to create product" };
    }
  }

  const product = await productRepository.createProduct({
    ...productDetails,
    productImage: productImage,
  });

  if (!product) throw { message: "not able to create product" };

  return product;
};

export const getProductByIdServie = async (productId) => {
  const response = await productRepository.getProductById(productId);

  if (!response) throw { message: "not able to find product" };

  return response;
};

export const deleteProductByIdService = async (productId) => {
  const response = await productRepository.deleteProductById(productId);

  if (!response) throw { message: "not able to delete product" };

  return response;
};
