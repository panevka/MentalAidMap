import mongoose, { Schema } from "mongoose";
import { IProvider } from "../domain/provider.entity";

const ProviderSchema: Schema<IProvider> = new Schema(
  {
    code: { type: String, required: true },
    nip: { type: String, required: true },
    regon: { type: String, required: true },
    registry_number: { type: String, required: true },
    name: { type: String, required: true },
    phone: { type: String, required: true, default: null },
    agreements: { type: [String], required: true, default: [] },
  },
  { collection: "Providers" },
);
export const ProviderModel = mongoose.model<IProvider>(
  "Provider",
  ProviderSchema,
);
