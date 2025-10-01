import express from "express";
import mongoose from "mongoose";
import router from "./middleware/router.middleware";
import dotenv from "dotenv";
import { setupCommonMiddleware } from "./middleware/common.middleware";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI || "";
setupCommonMiddleware(app);

// Database connection
mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.set("trust proxy", true);

app.use("/api", router);

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
