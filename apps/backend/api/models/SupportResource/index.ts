import mongoose, { Schema } from "mongoose";
import {
  IAgeRange,
  ISupportResource,
  SupportType as SupportType,
} from "../../types/SupportResource.types";
import { AvailabilitySchema } from "./Availability";

// Related schema declarations
//

const AgeRangeSchema: Schema<IAgeRange> = new Schema(
  {
    minInclusive: { type: Number, required: true, min: 0 },
    maxExclusive: { type: Number, required: true, min: 0 },
  },
  { _id: false },
);

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
