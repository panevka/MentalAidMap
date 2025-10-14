import { ProviderRepository } from "../infrastructure/provider.repository";
import { GeoapifyClient } from "../infrastructure/geoapify.client";

export class ProviderService {
  constructor(
    private repo: ProviderRepository,
    private geoapify: GeoapifyClient,
  ) {}

  async getProviders(searchPhrase: string) {
    const { lon, lat } =
      await this.geoapify.getCoordinatesBySearchText(searchPhrase);

    return this.repo.findNearLocation([lon, lat], 30);
  }

  async getProviderData(providerCode: string) {
    return this.repo.findByCode(providerCode);
  }
}
