import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["employee", "admin"],
      default: "employee",
    },
  },
  { timestamps: true },
);

const userModel =
  mongoose.models.Userschema || mongoose.model("Userschema", userSchema);

export default userModel;
