import mongoose, { Schema } from "mongoose";
import { ILocation, IProviderAddress } from "../../types/ProviderAddress.types";

const LocationSchema: Schema<ILocation> = new Schema({
  type: { type: String, enum: ["Point"], required: true },
  coordinates: { type: [Number], required: true },
});

const ProviderAddressSchema: Schema<IProviderAddress> = new Schema(
  {
    code: { type: String, required: true },
    city: { type: String, required: true },
    street: { type: String, required: true },
    building_number: { type: String, required: true },
    district: { type: String, required: true },
    post_code: { type: String, required: true },
    voivodeship: { type: String, required: true },
    location: { type: LocationSchema, required: true },
  },
  { collection: "ProviderAddresses" },
);

export const ProviderAddress = mongoose.model<IProviderAddress>(
  "ProviderAddress",
  ProviderAddressSchema,
);
