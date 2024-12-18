import { productService } from "../service/productService.js";
export const createProduct = async (req, res) => {
  try {
    const response = await productService({
      productName: req.body.name,
      description: req.body.description,
      imagePath: req.file.path,
      price: req.body.price,
      category: req.body.category,
      inStock: req.body.inStock,
    });

    return res.json({
      message: "ok",
      data: response,
    });
  } catch (error) {
    return res.json({
      message: "controller error",
    });
  }
};
