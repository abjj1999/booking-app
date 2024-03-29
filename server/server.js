import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import usersRoutes from "./routes/users.js";
import hotelsRoutes from "./routes/hotels.js";
import roomsRoutes from "./routes/rooms.js";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();
dotenv.config();

//MONGO DB CONNECTION
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB);
    console.log("DB connection established");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("DB PROBLEM");
});

//MIDDLEWARES
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/hotels", hotelsRoutes);
app.use("/api/rooms", roomsRoutes);
app.use((err, req, res, next) => {
  const errorSt = err.status || 500;
  const errorMsg = err.message || "something went wrong";
  return res.status(errorSt).json({
    success: false,
    status: errorSt,
    message: errorMsg,
    stack: err.stack,
  });
});
const path = require("path");

// Step 1:
app.use(express.static(path.resolve(__dirname, "./client/build")));
// Step 2:
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});
//listner
app.listen(8000, () => {
  connect();
  console.log("listening to port 8000");
});
