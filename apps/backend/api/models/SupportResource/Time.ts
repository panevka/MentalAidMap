import { Schema } from "mongoose";
import { ITime } from "@shared/database/SupportResource.types";

export const TimeSchema: Schema<ITime> = new Schema(
  {
    hour: { type: Number, required: true },
    minute: { type: Number, required: true },
  },
  { _id: false },
);
