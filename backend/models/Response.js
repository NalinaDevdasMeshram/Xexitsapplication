import mongoose, { model } from "mongoose";
const responseSchema = new mongoose.Schema({
  employeeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Userschema",
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
