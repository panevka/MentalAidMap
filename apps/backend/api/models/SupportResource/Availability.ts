import { Schema } from "mongoose";
import { IAvailability } from "@shared/database/SupportResource.types";
import { AvailabilityPatternSchema } from "./AvailabilityPattern";

export const AvailabilitySchema: Schema<IAvailability> = new Schema(
  {
    timezone: { type: String, required: true },
    patterns: {
      type: [AvailabilityPatternSchema],
      required: true,
      default: [],
    },
    additional_dates: { type: [Date] },
  },
  { _id: false },
);
