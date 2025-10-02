import { Request, Response } from "express";

export enum RequestPayloadType {
  Params = "params",
  Body = "body",
  Query = "query",
}

export interface IRouteDefinition {
  handler: (req: Request, res: Response) => Promise<void>;
  consumes: RequestPayloadType;
}
