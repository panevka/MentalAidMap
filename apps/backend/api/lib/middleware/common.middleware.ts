import cors from "cors";
import bodyParser from "body-parser";
import { rateLimitMiddleware } from "./rate-limit.middleware";
import { Express } from "express";
import router from "./router.middleware";

export const setupCommonMiddleware = (app: Express) => {
  // CORS Middleware
  app.use(cors());

  // Body Parser Middleware
  app.use(bodyParser.json());

  app.use(rateLimitMiddleware);

  app.use("/api", router);
};
