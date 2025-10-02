import { Schema } from "mongoose";
import { IRRule } from "@shared/database/SupportResource.types";
import {
  RRuleFrequencyArray,
  RRuleByDayArray,
} from "@shared/database/SupportResource.types";

export const RRuleSchema: Schema<IRRule> = new Schema(
  {
    freq: { type: String, enum: RRuleFrequencyArray, required: true },
    count: { type: Number, required: true },
    interval: { type: Number, required: true },
    by_day: { type: [String], enum: RRuleByDayArray, required: true },
  },
  { _id: false },
);
