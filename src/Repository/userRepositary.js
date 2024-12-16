import { User } from "../schemas/userSchema.js";

export const userRepositary = {
  findUser: async function (parameters) {
    const user = await User.findOne({ ...parameters });
    return user;
  },

  createUser: async function (userDetails) {
    const details = await User.create(userDetails);
    return details;
  },

};
