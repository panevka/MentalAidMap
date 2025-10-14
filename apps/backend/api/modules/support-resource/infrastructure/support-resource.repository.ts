import { SupportResourceModel } from "./support-resource.schema";

export class SupportResourceRepository {
  async findAll() {
    return SupportResourceModel.find().exec();
  }
}
