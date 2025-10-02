import { z, ZodType } from "zod";
import { GetProviderDataQuery, GetProvidersQuery } from "./provider.dto";

export const getProvidersValidator = z.object({
  search: z
    .string()
    .min(1, "Search phrase cannot be empty")
    .max(255, "Search phrase too long")
    .regex(
      /^[\p{L}\p{N} _-]+$/u,
      "Invalid characters detected. Allowed: letters, numbers, spaces, _, -",
    ),
}) satisfies ZodType<GetProvidersQuery>;

export const getProviderDataValidator = z.object({
  provider_id: z
    .string()
    .min(1, "Cannot be empty")
    .max(255, "Input too long")
    .regex(
      /^[\p{L}\p{N} _-]+$/u,
      "Invalid characters detected. Allowed: letters, numbers, spaces, _, -",
    ),
}) satisfies ZodType<GetProviderDataQuery>;
