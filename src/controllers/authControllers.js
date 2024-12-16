import { loginService } from "../service/authService.js";

export async function loginController(req, res) {
  try {
    const response = await loginService(req.body);

    res.cookie("authToken", response, {
      httpOnly: true,
      secure: false,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      success: true,
      message: "login Successfully",
      data: {},
    });

    //auth service
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: {},
      message: error.message,
    });
  }
}
