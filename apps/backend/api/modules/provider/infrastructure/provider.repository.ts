import { ProviderModel } from "./provider.schema";
import { ProviderAddressModel } from "./provider-address.schema";

export class ProviderRepository {
  async findByCode(code: string) {
    return ProviderModel.findOne({ code });
  }

  async findNearLocation(coordinates: [number, number], radius: number) {
    return ProviderAddressModel.find({
      location: {
        $nearSphere: {
          $geometry: { type: "Point", coordinates },
          $maxDistance: radius * 1000,
        },
      },
    });
  }
}
