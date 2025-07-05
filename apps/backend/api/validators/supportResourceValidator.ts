import { z, ZodType } from "zod";
import {
  ISupportResource,
  RRuleByDay,
  RRuleFrequency,
  SupportType,
} from "../types/SupportResource.types";
import mongoose from "mongoose";

export const createSupportResourceValidator = z.object({
  name: z.string().min(3).max(100),
  provider_name: z.string().min(3).max(100),
  age_range: z.object({
    minInclusive: z.number().int().min(0).max(150),
    maxExclusive: z.number().int().min(0).max(150),
  }),
  tags: z.array(z.string()),
  availability: z.object({
    patterns: z.array(
      z.object({
        start_time: z.object({
          hour: z.number().int().min(0).max(23),
          minute: z.number().int().min(0).max(59),
        }),
        end_time: z.object({
          hour: z.number().int().min(0).max(23),
          minute: z.number().int().min(0).max(59),
        }),
        rrule: z.object({
          freq: z.nativeEnum(RRuleFrequency),
          count: z.number().int().min(1),
          interval: z.number().int().min(1),
          by_day: z.array(z.nativeEnum(RRuleByDay)).superRefine((arr, ctx) => {
            if (arr.length !== new Set(arr).size) {
              ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "No duplicate values allowed",
              });
            }
          }),
        }),
        excluded_dates: z.array(z.date()),
      }),
    ),
    additional_dates: z.array(z.date()),
  }),
  support_type: z.nativeEnum(SupportType),
}) satisfies ZodType<ISupportResource>;

export const deleteSupportResourceValidator = z.object({
  id: z.custom<mongoose.Types.ObjectId>(),
});
