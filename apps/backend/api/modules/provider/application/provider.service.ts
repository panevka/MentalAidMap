import { ProviderRepository } from "../infrastructure/provider.repository";
import { GeoapifyClient } from "../infrastructure/geoapify.client";
import { GetProvidersQuery, GetProviderDataQuery } from "./provider.dto";

export class ProviderService {
  constructor(
    private repo: ProviderRepository,
    private geoapify: GeoapifyClient,
  ) {}

  async getProviders(query: GetProvidersQuery) {
    const { lon, lat } = await this.geoapify.getCoordinates(
      query?.city,
      query.postCode,
    );

    return this.repo.findNearLocation([lon, lat], query.radius);
  }

  async getProviderData(query: GetProviderDataQuery) {
    return this.repo.findByCode(query.providerCode);
  }
}
