import { z } from "zod";

const postCodeREG = /^\d{2}-\d{3}$/;
const radiusError = { message: "Radius must be a number between 5 and 150" };

export const providersQueryValidator = z.object({
  city: z.string({
    required_error: "City is required",
  }),
  postCode: z
    .string({
      required_error: "Post-code is required",
    })
    .regex(postCodeREG, {
      message: "Post-code does not match XX-XXX format",
    }),
  radius: z.coerce
    .number({
      required_error: "Radius is required",
    })
    .min(5, radiusError)
    .max(150, radiusError),
});

export const providersDataQueryValidator = z.object({
  query: z.object({
    providerCode: z.string({
      required_error: "City is required",
    }),
  }),
});
