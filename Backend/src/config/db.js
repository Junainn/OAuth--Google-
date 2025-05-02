import mongoose from "mongoose";
import { DB_URI } from "./env.js";

if (!DB_URI) {
  console.log("Please add Database URI to env file");
}

const connectDB = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log("✅ Database connected");
  } catch (err) {
    console.error("❌ Database connection failed:", err);
  }
};

export default connectDB;
