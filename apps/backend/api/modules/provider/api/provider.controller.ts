import { Request, Response } from "express";
import { ProviderService } from "../application/provider.service";
import { GeoapifyClient } from "../infrastructure/geoapify.client";
import { ProviderRepository } from "../infrastructure/provider.repository";

const service = new ProviderService(
  new ProviderRepository(),
  new GeoapifyClient(),
);

export class ProviderController {
  async getProviders(req: Request, res: Response) {
    try {
      const providers = await service.getProviders(req.query as any);
      if (!providers || providers.length === 0) {
        return res.status(404).json({ message: "No providers found" });
      }
      return res.json(providers);
    } catch (e) {
      console.error(e);
      return res.status(500).json({ message: "Error fetching providers" });
    }
  }

  async getProviderData(req: Request, res: Response) {
    try {
      const provider = await service.getProviderData(req.query as any);
      if (!provider) {
        return res.status(404).json({ message: "Provider not found" });
      }
      return res.json(provider);
    } catch (e) {
      console.error(e);
      return res.status(500).json({ message: "Error fetching provider" });
    }
  }
}
