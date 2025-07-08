import { Schema } from "mongoose";
import {
  IRRule,
  RRuleByDay,
  RRuleFrequency,
} from "../../types/SupportResource.types";

export const RRuleSchema: Schema<IRRule> = new Schema(
  {
    freq: { type: String, enum: RRuleFrequency, required: true },
    count: { type: Number, required: true },
    interval: { type: Number, required: true },
    by_day: { type: [String], enum: RRuleByDay, required: true },
  },
  { _id: false },
);
