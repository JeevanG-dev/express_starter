import {deleteProductByIdService, getProductByIdServie, productService } from "../service/productService.js";
export const createProduct = async (req, res) => {
  try {
    const response = await productService({
      productName: req.body.name,
      description: req.body.description,
      imagePath: req.file?.path,
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


export const getProductById = async (req,res) =>{

try {

  const response = await getProductByIdServie(req.params.id)

  return res.status(200).json({
    message:"Ok",
    success:true,
    data:response,

  })
  
} catch (error) {
  res.status(200).json({

    message:"product not available",
  })
}


}

export const deleteProductById = async (req,res) =>{

  try {
  
    const response = await deleteProductByIdService(req.params.id)
  
    return res.status(200).json({
      message:"Producted deleted successfully",
      success:true,
  
    })
    
  } catch (error) {
  
    res.status(400).json({
      message:"product didnot found"
    })
  }
  
  
  }