import { cart } from "../schemas/cartSchema.js";

export const cartRepository = async (userId) => {
  try {
    const newCart = await cart.create({
      user: userId,
    });

    return newCart;
  } catch (error) {
    throw { message: "Internal Error" };
  }
};

export const getCart = async (userId) => {
  try {
    const response = await cart.findOne({user:userId});
    return response;
  } catch (error) {

    console.log(error);
    
throw new Error("No cart found")


  }
};
