import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI tidak ditemukan di environment variables");
    }

    if (mongoose.connection.readyState === 1) {
      return mongoose.connection.asPromise();
    }

    return await mongoose.connect(process.env.MONGO_URI);
  } catch (error) {
    console.error("Error koneksi MongoDB:", error);
    throw error;
  }
};
