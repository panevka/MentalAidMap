import { SupportResourceRepository } from "../infrastructure/support-resource.repository";

export class SupportResourceService {
  constructor(private repo: SupportResourceRepository) {}

  async getSupportResources() {
    const supportResources = await this.repo.findAll();
    return supportResources;
  }
}
