import { Schema } from "mongoose";
import { IAvailabilityPattern } from "@shared/database/SupportResource.types";
import { TimeSchema } from "./Time";
import { RRuleSchema } from "./RRule";

export const AvailabilityPatternSchema: Schema<IAvailabilityPattern> =
  new Schema(
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
