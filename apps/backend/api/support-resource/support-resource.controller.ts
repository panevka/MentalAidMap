import { Request, Response } from "express";
import { SupportResource } from "./support-resource.schema";
import { IRouteDefinition, RequestPayloadType } from "../lib/types/typeUtils";

export const getSupportResources = async (_req: Request, res: Response) => {
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

export const deleteSupportResource = async (req: Request, res: Response) => {
  try {
    const id = req.query.id;
    const deletedDocument = await SupportResource.findByIdAndDelete(id);
    if (deletedDocument !== null) {
      res.status(200).send({ msg: "Item deleted successfully." });
    } else {
      res.status(404).send({ msg: "Item not found. Cannot delete." });
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send({ msg: error.message });
    }
  }
};

export const deleteSupportResourceRouteDefinition: IRouteDefinition = {
  handler: deleteSupportResource,
  consumes: RequestPayloadType.Query,
};

export const updateSupportResource = async (req: Request, res: Response) => {
  try {
    const { id: id, ...data } = req.body;
    console.log(id);
    console.log(data);

    const updatedDocument = await SupportResource.findByIdAndUpdate(
      id,
      req.body,
    );
    if (updatedDocument !== null) {
      res.status(200).send({ msg: "Item updated successfully." });
    } else {
      res.status(404).send({ msg: "Item not found. Cannot update." });
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send({ msg: error.message });
    }
  }
};

export const updateSupportResourceRouteDefinition: IRouteDefinition = {
  handler: updateSupportResource,
  consumes: RequestPayloadType.Body,
};
