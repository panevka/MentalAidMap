import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { setupCommonMiddleware } from "./middleware/commonMiddleware";

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

// Routes
import apiRoutes from "./routes/apiRoutes";

app.set("trust proxy", true);
app.use("/api", apiRoutes);

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
