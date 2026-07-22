import resignationModel from "../models/Resignation.js";
import response from "../models/Response.js";

export const submitResignation = async (req, res) => {
  try {
    const { lwd } = req.body;
    const employeeId = req.user.id;
    const lwdDate = new Date(lwd);
    if (isNaN(lwdDate.getTime())) {
      return res
        .status(500)
        .json({ message: "Invalid Date formate. use YYYY-MM-DD" });
    }
    const existingResignation = await resignationModel.findOne({
      employeeId,
      status: "pending",
    });
    if (existingResignation) {
      return res
        .status(400)
        .json({ message: "you already have pending resignation request.." });
    }
    const resignation = new Resignation({ employeeId: employeeId, lwd: lwd });
    await resignation.save();
    res.status(200).json({
      date: {
        resignation: {
          _id: resignation._id,
        },
      },
    });
  } catch (error) {
    console.log("resignation submission error:", error);
    res
      .status(500)
      .json({ message: "server error duration resignation submission" });
  }
};

export const submitQuestionnaire = async (req, res) => {
  try {
    const { responses } = req.body;
    const employeeId = req.user.id;
    if (Array.isArray(responses) || responses.length === 0) {
      res.status(400).json({ message: "Response must be an empty array." });
    }
    const responseEntry = new ResponseModel({
      employeeId: employeeId,
      responses: responses,
    });

    await responseEntry.save();
    res
      .status(200)
      .json({ message: "Exit questionnaire submitted successfully" });
  } catch (error) {
    console.log("server error during questionnaire submission", error);
    res
      .status(500)
      .json({ message: "server error during questionnaire submission." });
  }
};

export const getResignationStatus = async (req, res) => {
  try {
    const employeeId = req.user.id;
    const resignation = await Resignation.findOne({ employeeId });

    if (!resignation) {
      return res.status(200).json({ message: "No resignation record found" });
    }

    res.status(200).json({
      resignation_status: resignation.status,
    });
  } catch (error) {
    console.error("server error while checking status");
    res.status(500).json({ message: "server error while checking status" });
  }
};
