import { registerUserService } from "../service/userService.js";

export const createUser = async (req, res) => {

try {
    
    const response = await registerUserService(req.body);
    return res.json({
      message: "created successfully",
      success: true,
      data: response,
    })


} catch (error) {

    return res.json({
        message:"Error found",
    })
    
}



  
};
