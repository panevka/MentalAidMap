import { AnyZodObject, ZodError } from "zod";
import { Request, Response, NextFunction } from "express";
import { RequestPayloadType } from "../types/typeUtils";

export const validateRequest =
  (validator: AnyZodObject, dataSource: RequestPayloadType) =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      switch (dataSource) {
        case RequestPayloadType.Params:
          await validator.parseAsync(req.params);
          break;
        case RequestPayloadType.Query:
          await validator.parseAsync(req.query);
          break;
        case RequestPayloadType.Body:
          await validator.parseAsync(req.body);
          break;
        default:
          res.status(500).json({ msg: "Invalid data source type." });
          return;
      }
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({
          status: "error",
          errors: error.issues.map((issue) => ({
            path: issue.path.join("."),
            message: issue.message,
          })),
        });
        return;
      }
      res.status(500).json({ msg: "Internal server error." });
      return;
    }
  };
