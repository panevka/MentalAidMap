import { Schema } from "mongoose";
import { IAgeRange } from "../../types/SupportResource.types";

export const AgeRangeSchema: Schema<IAgeRange> = new Schema(
  {
    minInclusive: { type: Number, required: true, min: 0 },
    maxExclusive: { type: Number, required: true, min: 0 },
  },
  { _id: false },
);
