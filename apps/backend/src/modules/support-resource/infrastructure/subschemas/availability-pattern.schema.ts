import { Schema } from "mongoose";
import { IAvailabilityPattern } from "@shared/database/SupportResource.types";
import { TimeSchema } from "./time.schema";
import { RRuleSchema } from "./rrule.schema";

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
