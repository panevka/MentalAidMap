import { SimplifiedSupportResourceRepository } from "../infrastructure/simplified-support-resource.repository";

export class SimplifiedSupportResourceService {
  constructor(private repo: SimplifiedSupportResourceRepository) {}

  async getSupportResources() {
    const supportResources = await this.repo.findAll();
    return supportResources;
  }
}
