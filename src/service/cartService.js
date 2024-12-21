import { getCart } from "../Repository/cartRepository.js";

export const cartService = {
  getCartService: async (userId) => {
    try {
      const response = await getCart(userId);

      if (!response){

        throw new Error("cart not available")
      } 

      return response;
    } catch (error) {
        console.log(error);
        
      throw error;
    }
  },
};
