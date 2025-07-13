import mongoose, { Schema } from "mongoose";
import {
  ISupportResource,
  SupportType,
} from "@shared/database/SupportResource.types";
import { AvailabilitySchema } from "./Availability";
import { AgeRangeSchema } from "./AgeRange";

// Collection entry schema
const SupportResourceSchema: Schema<ISupportResource> = new Schema(
  {
    name: { type: String, required: true },
    provider_name: { type: String, required: true },
    age_range: {
      type: AgeRangeSchema,
      required: true,
    },
    tags: { type: [String], required: true },
    availability: { type: AvailabilitySchema, required: true },
    support_type: { type: String, enum: SupportType, required: true },
  },
  { collection: "SupportResources" },
);

export const SupportResource = mongoose.model<ISupportResource>(
  "SupportResource",
  SupportResourceSchema,
);
