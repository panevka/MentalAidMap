import { IShift } from "@shared/database/SupportResource.types";
import { Schema } from "mongoose";
import { AvailabilitySchema } from "./Availability";

export const ShiftSchema: Schema<IShift> = new Schema(
  {
    responder_profession: { type: [String], required: true },
    event: { type: String, required: true },
    availability: { type: AvailabilitySchema, required: true },
  },

  { _id: false },
);
