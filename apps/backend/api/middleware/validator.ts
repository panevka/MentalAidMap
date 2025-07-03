import { AnyZodObject, ZodError } from "zod";
import { Request, Response, NextFunction } from "express";
import { RequestPayloadType } from "../types/typeUtils";

export const validateRequest =
  (validator: AnyZodObject, dataSource: RequestPayloadType) =>
  async (req: Request, res: Response, next: NextFunction) => {
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
          break;
      }
      validator.parseAsync(req.query);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(500).send({ msg: error?.issues?.[0]?.message });
      }
    }
    return res.status(500).send("Error");
  };
