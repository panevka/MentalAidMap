import cors from "cors";
import bodyParser from "body-parser";
import { rateLimitMiddleware } from "./rateLimitMiddleware";
import { Express } from "express";

export const setupCommonMiddleware = (app: Express) => {
  // CORS Middleware
  app.use(cors());

  // Body Parser Middleware
  app.use(bodyParser.json());

  app.use(rateLimitMiddleware);
};
