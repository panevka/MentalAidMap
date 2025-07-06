import mongoose, { Schema } from "mongoose";

// Agreements collection entry
export interface IAgreement extends Document {
  id: { type: string; required: true };
  code: { type: string; required: true };
  origin_code: { type: string; required: true };
  service_type: { type: string; required: true };
  service_name: { type: string; required: true };
  amount: { type: number; required: true };
  provider_code: { type: string; required: true };
  year: { type: number; required: true };
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
