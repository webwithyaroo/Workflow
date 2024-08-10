import mongoose, { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    clerkUserId: { type: String, required: true },
    emailAddress: { type: String, required: true },
  },
  { timestamps: true }
);

const User = mongoose.models.User || model("User", userSchema);

export default User;
