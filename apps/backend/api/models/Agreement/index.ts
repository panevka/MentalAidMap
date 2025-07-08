import mongoose, { Schema } from "mongoose";
import { IAgreement } from "../../types/Agreement.types";

// Agreements collection entry
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
