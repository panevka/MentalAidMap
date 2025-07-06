// ProviderAddresses collection entry

import mongoose, { Schema } from "mongoose";

interface Location {
  type: "Point";
  coordinates: [number, number];
}

const LocationSchema = new Schema({
  type: { type: String, enum: ["Point"], required: true },
  coordinates: { type: [Number], required: true },
});

export interface IProviderAddress extends Document {
  code: { type: string; required: true };
  city: { type: string; required: true };
  street: { type: string; required: true };
  building_number: { type: String; required: true };
  district: { type: string; required: true };
  post_code: { type: string; required: true };
  voivodeship: { type: string; required: true };
  location: Location;
}

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
