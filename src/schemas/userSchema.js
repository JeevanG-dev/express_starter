import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First Name is Required"],
      lowercase: true,
      trim: true,
      maxlength: [20, "First name should be less than 20"],
    },

    lastName: {
      type: String,
      required: [true, "First Name is Required"],
      minlength: [5, "Firstname must be 5 char long"],
      lowercase: true,
      trim: true,
      maxlength: [20, "First name should be less than 20"],
    },

    mobileNumber: {
      type: String,
      trim: true,
      maxlength: 10,
      minlength: 10,
      unique: [true, "Phone number is already in use"],
      required: true,
    },

    email: {
      type: String,
      trim: true,
      required: [true, "Email is required"],
      unique: [true, "Email is already use"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },

    password: {
      type: String,
      required: [true, "Must required"],
      minlength: 6,
      maxlength: 10,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function () {
  //here you can modifiy user before it is saved in mongodb
  const hashPassword = await bcrypt.hash(this.password, 10);
  this.password = hashPassword;
});

export const User = mongoose.model("User", userSchema); //model is a collection in the mongo_DB
