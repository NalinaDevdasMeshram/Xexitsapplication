import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db.js";
import authRoute from "./routes/authRoute.js";
import userRoute from "./routes/userRoute.js";
import adminRoute from "./routes/adminRoute.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8088;

// Allowed frontend URLs
const allowedOrigins = [
  "http://localhost:5173",
  "https://your-frontend-domain.vercel.app",
];

const corsOptions = {
  origin: allowedOrigins,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// API routes
app.use("/api", authRoute);
app.use("/api", userRoute);
app.use("/api", adminRoute);

// Start server
app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server is running on port ${PORT}`);
});
