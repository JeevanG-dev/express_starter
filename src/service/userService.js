
import { cartRepository } from "../Repository/cartRepository.js";
import { userRepositary } from "../Repository/userRepositary.js";

export const registerUserService = async (userDetails) => {

    
  const user = await userRepositary.findUser({
    email: userDetails.email,
    mobileNumber: userDetails.mobileNumber,
  });

  if (user) throw "This user already exist";

  const createUserService = await userRepositary.createUser({
    email: userDetails.email,
    firstName: userDetails.firstName,
    lastName: userDetails.lastName,
    mobileNumber: userDetails.mobileNumber,
    password: userDetails.password,
  });

  await cartRepository(createUserService ._id)

  return createUserService;
}
