import express from "express";
const server = express();
const PORT = process.env.PORT;
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";

connectDB();

server.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
