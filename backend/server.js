import express from "express";
const app = express();
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
const PORT = process.env.PORT;
import connectDB from "./config/db.js";
import authRoute from "./routes/authRoute.js";
import userRoute from "./routes/userRoute.js";
import adminRoute from "./routes/adminRoute.js";

//connect to mongodb

app.use(cors());
app.use(express.json());

app.use("/api", authRoute);
app.use("/api", userRoute);
app.use("/api", adminRoute);

app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server is running on port ${PORT}`);
});
