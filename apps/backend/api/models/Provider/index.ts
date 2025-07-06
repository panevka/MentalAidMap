import mongoose, { Schema, Document } from "mongoose";

// Providers collection entry
export interface IProvider extends Document {
  code: { type: string; required: true };
  nip: { type: string; required: true };
  regon: { type: string; required: true };
  registry_number: { type: String; required: true };
  name: { type: string; required: true };
  phone: { type: string; required: true };
  agreements: { type: string[]; required: true };
}

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

// Agreements collection entry
export interface IAgreement extends Document {
  id: { type: string; required: true };
  code: { type: string; required: true };
  origin_code: { type: string; required: true };
  service_type: { type: string; required: true };
  service_name: { type: string; required: true };
  amount: { type: Number; required: true };
  provider_code: { type: string; required: true };
  year: { type: Number; required: true };
}

const AgreementSchema: Schema<IAgreement> = new Schema(
  {
    id: { type: String, required: true },
    code: { type: String, required: true },
    origin_code: { type: String, required: true },
    service_type: { type: String, required: true },
    service_name: { type: String, required: true },
    amount: { type: Number, required: true },
    provider_code: { type: String, required: true },
    year: { type: Number, required: true },
  },
  { collection: "Agreements" },
);
export const Agreement = mongoose.model<IAgreement>(
  "Agreement",
  AgreementSchema,
);
