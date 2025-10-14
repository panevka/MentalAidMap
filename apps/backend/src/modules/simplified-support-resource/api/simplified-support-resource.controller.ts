import { Request, Response } from "express";
import { SimplifiedSupportResourceService } from "../application/simplified-support-resource.service";
import { SimplifiedSupportResourceRepository } from "../infrastructure/simplified-support-resource.repository";

const service = new SimplifiedSupportResourceService(
  new SimplifiedSupportResourceRepository(),
);

export class SimplifiedSupportResourceController {
  async getSupportResources(_: Request, res: Response) {
    try {
      const supportResources = await service.getSupportResources();
      if (!supportResources) {
        return res.status(404).json({ message: "No support resources found" });
      }
      return res.json(supportResources);
    } catch {
      console.error(e);
      return res
        .status(500)
        .json({ message: "Error fetching support resources" });
    }
  }
}
