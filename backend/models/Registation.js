import mongoose from "mongoose";

const registrationSchema = new mongoose.Schema(
  {
    employee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    reason: {
      type: String,
      required: true,
    },

    intendedLastWorkingDay: {
      type: Date,
      required: true,
    },

    status: {
      type: String,
      enum: ["Pending", "Approved", "Rejected"],
      default: "Pending",
    },

    exitDate: {
      type: Date,
      default: null,
    },

    hrRemarks: {
      type: String,
      default: "",
    },
  },
  { timestamps: true },
);

const registrationModel = mongoose.model("registration", registrationSchema);
export default registrationModel;