import express from "express";
import mongoose from "mongoose";
import router from "./lib/middleware/router.middleware";
import { setupCommonMiddleware } from "./lib/middleware/common.middleware";
import { EnvManager } from "./lib/env/env-manager";

const app = express();

mongoose
  .connect(EnvManager.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

setupCommonMiddleware(app);

app.set("trust proxy", true);

app.use("/api", router);

// app.listen(EnvManager.PORT, () =>
//   console.log(`Server running on port: ${EnvManager.PORT}`),
// );

export default app;
