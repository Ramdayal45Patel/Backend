import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectionUrl: string = process.env.MongoDB_URL!;

async function dbConnection() {
 try { 
    await mongoose.connect(connectionUrl);
    console.log("Successfully connected to the database.");
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw error;
  }
}

export default dbConnection;
