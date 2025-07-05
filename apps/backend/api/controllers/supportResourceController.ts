import { Request, Response } from "express";
import { SupportResource } from "../models/SupportResource";
import { IRouteDefinition, RequestPayloadType } from "../types/typeUtils";

export const getSupportResources = async (req: Request, res: Response) => {
  const resources = await SupportResource.find({});

  if (resources.length === 0) {
    res.status(404).json({ message: "No resources found" });
    return;
  } else {
    res.status(200).json(resources);
    return;
  }
};

export const createSupportResource = async (req: Request, res: Response) => {
  try {
    await SupportResource.create(req.body);
    res.status(200).send({ msg: "New SupportResource successfully created." });
  } catch (error) {
    res.status(500).send({ msg: error });
  }
};

export const createSupportResourceRouteDefinition: IRouteDefinition = {
  handler: createSupportResource,
  consumes: RequestPayloadType.Body,
};
