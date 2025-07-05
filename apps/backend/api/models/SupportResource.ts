import mongoose, { Schema } from "mongoose";
import {
  IAgeRange,
  IAvailability,
  IAvailabilityPattern,
  ISupportResource,
  RRuleByDay,
  RRuleFrequency,
  SupportType as SupportType,
} from "../types/SupportResource.types";

// Related schema declarations

const AvailabilityPatternSchema: Schema<IAvailabilityPattern> = new Schema(
  {
    start_time: {
      type: {
        hour: { type: Number, required: true },
        minute: { type: Number, required: true },
      },
      required: true,
    },
    end_time: {
      type: {
        hour: { type: Number, required: true },
        minute: { type: Number, required: true },
      },
      required: true,
    },
    rrule: {
      type: {
        freq: { type: String, enum: RRuleFrequency, required: true },
        count: { type: Number, required: true },
        interval: { type: Number, required: true },
        by_day: { type: [String], enum: RRuleByDay, required: true },
      },
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
    additonal_dates: { type: [Date] },
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
