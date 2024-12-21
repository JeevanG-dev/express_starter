import { userRepositary } from "../Repository/userRepositary.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from "../config/serverConfig.js";



export async function loginService (authDetails) {

  const email = authDetails.email;
  const plainPassword = authDetails.password;

  //1.chech if there is a registered user

  const user = await userRepositary.findUser({ email });

  if (!user) {
    throw { message: "no user found" };
  }

  //2. if the user is found we need to compare plainIncomingPassword with the hashed password

  const isPasswordValid = await bcrypt.compare(plainPassword, user.password)

  if(!isPasswordValid) throw {message: "invalid password"}

  //3. if the password is validated, create a token and return it.


//const userRole = user.role ? user.role : "USER";

  const tokken = jwt.sign({email:user.email, id:user._id,role:user.role}, JWT_SECRET, {expiresIn:'1h'})

  return tokken;
}
