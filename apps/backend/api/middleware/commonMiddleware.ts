import cors from "cors";
import bodyParser from "body-parser";

export const setupCommonMiddleware = (app: any) => {
  // CORS Middleware
  app.use(cors());

  // Body Parser Middleware
  app.use(bodyParser.json());
};
