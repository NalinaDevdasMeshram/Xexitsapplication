import seedAdmin from "../utilis/seedAdmin.js";
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.mongodb_url);
    await seedAdmin();
    console.log(`mongoDB Connected Successfully..`);
  } catch (err) {
    console.log(err.message);
  }
};

export default connectDB;
