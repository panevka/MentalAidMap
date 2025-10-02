import { SupportResourceService } from "../application/support-resource.service";
import { SupportResourceRepository } from "../infrastructure/support-resource.repository";
import { Request, Response } from "express";

const service = new SupportResourceService(new SupportResourceRepository());

export class SupportResourceController {
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
