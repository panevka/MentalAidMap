import mongoose, { Schema } from "mongoose";
import {
  IAgeRange,
  IAvailability,
  IAvailabilityPattern,
  ISupportResource,
  SupportType as SupportType,
} from "../../types/SupportResource.types";
import { TimeSchema } from "./Time";
import { RRuleSchema } from "./RRule";

// Related schema declarations
//

const AvailabilityPatternSchema: Schema<IAvailabilityPattern> = new Schema(
  {
    start_time: {
      type: TimeSchema,
      required: true,
    },
    end_time: {
      type: TimeSchema,
      required: true,
    },
    rrule: {
      type: RRuleSchema,
      required: true,
    },
    excluded_dates: { type: [Date] },
  },
  { _id: false },
);

const AgeRangeSchema: Schema<IAgeRange> = new Schema(
  {
    minInclusive: { type: Number, required: true, min: 0 },
    maxExclusive: { type: Number, required: true, min: 0 },
  },
  { _id: false },
);

const AvailabilitySchema: Schema<IAvailability> = new Schema(
  {
    patterns: {
      type: [AvailabilityPatternSchema],
      required: true,
      default: [],
    },
    additional_dates: { type: [Date] },
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
