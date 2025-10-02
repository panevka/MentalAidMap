import { ISupportResource } from "@shared/database/SupportResource.types";
import { AgeRangeSchema } from "./subschemas/age-range.schema";
import mongoose, { Schema } from "mongoose";
import { ServiceSchema } from "./subschemas/service.schema";

// Collection entry schema
const SupportResourceSchema: Schema<ISupportResource> = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    providers: { type: [String], required: true },
    age_range: {
      type: AgeRangeSchema,
      required: true,
    },
    tags: { type: [String], required: true },
    services: { type: [ServiceSchema], required: true },
  },
  { collection: "SupportResources" },
);

export const SupportResource = mongoose.model<ISupportResource>(
  "SupportResource",
  SupportResourceSchema,
);
