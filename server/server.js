const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

dotenv.config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// DB connect
connectDB();

// routes
app.use("/api", authRoutes);

// server start
app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);