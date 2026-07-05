import mongoose from "mongoose";

const exitInterviewSchema = new mongoose.Schema(
  {
    employee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    resignation: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Resignation",
      required: true,
    },

    answers: [
      {
        question: String,
        answer: String,
      },
    ],
    submitted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

const existsInterview = mongoose.model("ExitInterview", exitInterviewSchema);
export default existsInterview;
