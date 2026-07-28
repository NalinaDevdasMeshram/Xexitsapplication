import mongoose from "mongoose";

const resignationSchema = new mongoose.Schema(
  {
    employeeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Userschema",
      required: true,
    },
    lwd: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: ["Pending", "Approved", "Rejected"],
      default: "Pending",
    },
  },
  { timestamps: true },
);

const resignationModel =
  mongoose.models.Resignation ||
  mongoose.model("Resignation", resignationSchema);

export default resignationModel;
