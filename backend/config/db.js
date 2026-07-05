import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.mongodb_url);
    console.log(`mongoDB Connected Successfully..`);
  } catch (err) {
    console.log(err.message);
  }
};

export default connectDB;
