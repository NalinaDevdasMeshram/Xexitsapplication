import express from "express";
const router = express.Router();
import {
  getResignations,
  concludeResignation,
  getExitResponses,
} from "../controllers/adminController.js";
import { authenticationToken, isAdmin } from "../middleware/authMiddleware.js";

router.get(
  "/admin/resignations",
  authenticationToken,
  isAdmin,
  getResignations,
);
router.put(
  "/admin/conclude_resignation",
  authenticationToken,
  isAdmin,
  concludeResignation,
);

router.get(
  "/admin/exit_responses",
  authenticationToken,
  isAdmin,
  getExitResponses,
);

export default router;
