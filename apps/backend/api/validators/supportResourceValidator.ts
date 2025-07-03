import { z, ZodType } from "zod";
import {
  ISupportResource,
  RRuleByDay,
  RRuleFrequency,
  SupportType,
} from "../types/SupportResource.types";

export const createSupportResourceValidator = z.object({
  name: z.string(),
  provider_name: z.string(),
  age_range: z.object({
    minInclusive: z.number(),
    maxExclusive: z.number(),
  }),
  tags: z.array(z.string()),
  availability: z.object({
    patterns: z.array(
      z.object({
        start_time: z.object({ hour: z.number(), minute: z.number() }),
        end_time: z.object({ hour: z.number(), minute: z.number() }),
        rrule: z.object({
          freq: z.nativeEnum(RRuleFrequency),
          count: z.number(),
          interval: z.number(),
          by_day: z.array(z.nativeEnum(RRuleByDay)),
        }),
        excluded_dates: z.array(z.date()),
      }),
    ),
    additional_dates: z.array(z.date()),
  }),
  support_type: z.nativeEnum(SupportType),
}) satisfies ZodType<ISupportResource>;
