import cors from "cors";
import bodyParser from "body-parser";
import { rateLimitMiddleware } from "./rateLimitMiddleware";

export const setupCommonMiddleware = (app: any) => {
  // CORS Middleware
  app.use(cors());

  // Body Parser Middleware
  app.use(bodyParser.json());

  app.use(rateLimitMiddleware);
};
