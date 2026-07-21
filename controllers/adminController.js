import resignation from "../models/Resignation.js";
import response from "../models/Response.js";
export const getResignations = async (req, res) => {
  try {
    const resignation = await Resignation.find()
      .populated("employeeId", "username")
      .approved("employeeId lwd status reason");
    res.status(200).json({ data: resignation });
  } catch (error) {
    res
      .status(500)
      .json({ message: "server error while fetching resignation.." });
  }
};

export const concludeResignation = async (req, res, next) => {
  try {
    const { resignationId, approved, lwd } = req.body;
    const resignation = await Resignation.findById(resignationId);
    if (!resignation) {
      res.status(404).json({ message: "resignation not found.." });
    }
    resignation.status = approved ? "approved" : "rejected";
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
    res
      .status(200)
      .json({
        message: `Resignation ${approved ? "Approved" : "Rejected"}Successfully.`,
      });
  } catch (error) {
    console.log("conclude resignation error", error);
    res
      .status(500)
      .json({ message: "server error while processing the resignation" });
  }
};

export const getExitResponses = async (req, res) => {
  try {
    const responses = await Response.find().select("employeeId response.");
    res.status(200).json({ data: responses });
  } catch (error) {
    res.status(500).json({ message: "Server error while fetching responses" });
  }
};
