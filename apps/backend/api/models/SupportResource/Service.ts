import {
  ChargeArray,
  IService,
  SupportType,
} from "@shared/database/SupportResource.types";
import { Schema } from "mongoose";
import { ShiftSchema } from "./Shift";

export const ServiceSchema: Schema<IService> = new Schema(
  {
    support_type: { type: String, enum: SupportType, required: true },
    contact: { type: String, required: true },
    shifts: { type: [ShiftSchema], required: true },
    charge: { type: String, enum: ChargeArray, required: true },
  },

  { _id: false },
);
