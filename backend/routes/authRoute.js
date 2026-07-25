import express from "express";
import { register, login, verify } from "../controllers/authController.js";
import { authenticationToken } from "../middleware/authMiddleware.js";
const router = express.Router();

router.post("/auth/register", register);
router.post("/auth/login", login);
router.get("/auth/verify", authenticationToken, verify);

export default router;
