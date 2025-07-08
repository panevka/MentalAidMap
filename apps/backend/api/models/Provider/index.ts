import mongoose, { Schema } from "mongoose";
import { IProvider } from "../../types/Provider.types";

// Providers collection entry
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
export const Provider = mongoose.model<IProvider>("Provider", ProviderSchema);
