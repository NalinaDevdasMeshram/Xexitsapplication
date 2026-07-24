import express from "express";
const router = express.Router();
import {
  submitResignation,
  submitQuestionnaire,
  getResignationStatus,
} from "../controllers/userController.js";
import { authenticationToken } from "../middleware/authMiddleware.js";

router.post("/user/resign", authenticationToken, submitResignation);
router.post("/user/responses", authenticationToken, submitQuestionnaire);
router.get(
  "/user/resignation_status",
  authenticationToken,
  getResignationStatus,
);

export default router;
