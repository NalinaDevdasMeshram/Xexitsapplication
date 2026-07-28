import resignationModel from "../models/Resignation.js";
import response from "../models/Response.js";

export const getResignations = async (req, res) => {
  try {
    const resignation = await resignationModel
      .find()
      .populate("employeeId", "username")
      .select("employeeId lwd status reason");
    return res.status(200).json({ data: resignation });
  } catch (error) {
    console.error("Get resignations error:", error);
    res
      .status(500)
      .json({ message: "server error while fetching resignation.." });
  }
};

export const concludeResignation = async (req, res, next) => {
  console.log("Headers:", req.headers);
  console.log("Body:", req.body);
  try {
    const { resignationId, approved, lwd } = req.body;
    console.log("request", req.body);
    const resignation = await resignationModel.findById(resignationId);
    if (!resignation) {
      return res.status(404).json({ message: "resignation not found" });
    }
    resignation.status = approved ? "Approved" : "Rejected";
    if (approved && lwd) {
      const lwdDate = new Date(lwd);
      if (isNaN(lwdDate.getTime())) {
        return res
          .status(400)
          .json({ message: "Invalid Date farmate.Use YYYY-MM-DD" });
      }
      resignation.lwd = lwd;
    }
    await resignation.save();
    return res.status(200).json({
      message: `Resignation ${approved ? "Approved" : "Rejected"}Successfully.`,
    });
  } catch (error) {
    console.log("conclude resignation error", error);
    return res
      .status(500)
      .json({ message: "server error while processing the resignation" });
  }
};

export const getExitResponses = async (req, res) => {
  try {
    const responses = await response
      .find()
      .populate("employeeId", "username")
      .select("employeeId responses");
    return res.status(200).json({ data: responses });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error while fetching responses" });
  }
};
