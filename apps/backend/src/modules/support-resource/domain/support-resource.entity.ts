import { IAgeRange, IService } from "./support-resource.value";

export interface SupportResource {
  name: string;
  description: string;
  providers: string[];
  age_range: IAgeRange;
  tags: string[];
  services: IService[];
}
