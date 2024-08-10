import mongoose, { Document, Schema } from "mongoose";
export const userSchema = new mongoose.Schema(
  {
    clerkUserId: { type: String, Unique: true, required: true },
    emailAddress: { type: String, required: true },
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);
