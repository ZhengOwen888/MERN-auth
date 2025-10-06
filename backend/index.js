import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import { connectDB } from "./db/connectdb.js";

import authRoutes from "./routes/auth.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // allows us to parse incoming requests: req.body
app.use(cookieParser()); // allows us to parse incoming cookies

app.use("/api/auth", authRoutes);

connectDB(); // connect to database

app.listen(5000, () => {
  console.log("Server is running on port", PORT);
});

// Codeesistency 1:35:56
// Advanced MERN Auth Course: Email Verification, Password Recovery, and Welcome Emails
