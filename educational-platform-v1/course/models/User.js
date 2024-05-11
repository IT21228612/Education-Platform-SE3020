import mongoose from "mongoose";
import USER_ROLES from "../constants/roles.js";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: Object.values(USER_ROLES),
      default: USER_ROLES.BUYER,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);
