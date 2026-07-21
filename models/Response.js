import mongoose, { model } from "mongoose";
const responseSchema = new mongoose.Schema({
  employeeid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    Required: true,
  },
  responses: [
    {
      questionText: { type: String, required: true },
      response: { type: String, required: true },
    },
  ],
  submittedAt: { type: Date, default: Date.now },
});

const response = mongoose.model("Response", responseSchema);
export default response;
