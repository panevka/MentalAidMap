import { Request, Response } from "express";
import { SupportResource } from "../models/SupportResource";

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
