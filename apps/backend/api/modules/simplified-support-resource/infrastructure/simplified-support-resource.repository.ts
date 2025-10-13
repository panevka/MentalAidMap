import { SimplifiedSupportResourceModel } from "./simplified-support-resource.schema";

export class SimplifiedSupportResourceRepository {
  async findAll() {
    return SimplifiedSupportResourceModel.find().exec();
  }
}
