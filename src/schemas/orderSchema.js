import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
    items: [
      {
        products: {
          type: mongoose.Schema.ObjectId,
          required: true,
          ref: "products",
        },
        quantity: {
          type: Number,
          required: true,
          default: 1,
        },
      },
    ],
    totalPrice: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: [
        "ORDERED",
        "CANCELLED",
        "DELIVERED",
        "PROCESSING",
        "OUT_FOR_DELIVERY",
      ],
      default: "ORDERED",
    },
    address: {
      type: String,
      minLength: [10, "Minimum length must be 10 characters"],
    },
    paymentMethod: {
      type: String,
      enum: ["ONLINE", "CASH"],
    },
  },
  {
    Timestamp: true,
  }
);

export const order = mongoose.model("Orders", orderSchema)