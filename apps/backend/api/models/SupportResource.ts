import mongoose, { Schema } from "mongoose";
import {
  IAvailability,
  IAvailabilityPattern,
  ISupportResource,
  Type,
} from "../types/SupportResource.types";

import { RRuleByDay, RRuleFrequency } from "../types/RRule.types";

// Related schema declarations

const RRuleFrequencySchema: Schema<RRuleFrequency> = new Schema({
  enum: [
    "yearly",
    "weekly",
    "monthly",
    "daily",
    "hourly",
    "minutely",
    "secondly",
  ],
});

const RRuleByDaySchema: Schema<RRuleByDay> = new Schema({
  enum: ["mo", "tu", "we", "th", "fr", "sa", "su"],
});

const IAvailabilityPatternSchema: Schema<IAvailabilityPattern> = new Schema({
  start_time: {
    type: {
      hour: { type: Number, required: true },
      minute: { type: Number, required: true },
    },
  },
  end_time: {
    type: {
      hour: { type: Number, required: true },
      minute: { type: Number, required: true },
    },
  },
  rrule: {
    freq: { type: RRuleFrequencySchema },
    count: { type: Number, required: true },
    interval: { type: Number, required: true },
    by_day: { type: [RRuleByDaySchema], required: true },
  },
  excluded_dates: { type: [Date] },
});

const AvailabilitySchema: Schema<IAvailability> = new Schema({
  patterns: { type: [IAvailabilityPatternSchema], required: true, default: [] },
  additonal_dates: { type: [Date] },
});

const TypeSchema: Schema<Type> = new Schema({
  enum: ["email", "phone", "webchat"],
});

// Collection entry schema
const SupportResourceSchema: Schema<ISupportResource> = new Schema(
  {
    name: { type: String, required: true },
    provider_name: { type: String, required: true },
    age_range: {
      minInclusive: { type: Number, required: true, min: 0 },
      maxExclusive: { type: Number, required: true, min: 0 },
    },
    tags: { type: [String], required: true },
    availability: { type: AvailabilitySchema, required: true, default: [] },
    type: { type: TypeSchema, required: true },
  },
  { collection: "SupportResources" },
);

export const SupportResource = mongoose.model<ISupportResource>(
  "SupportResource",
  SupportResourceSchema,
);
