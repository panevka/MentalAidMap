import { Schema, model } from "mongoose";
import { ISimplifiedSupportResource } from "../domain/simplified-support-resource.entity";

const SimplifiedSupportResourceSchema = new Schema<ISimplifiedSupportResource>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      default: "",
    },
    tags: {
      type: [String],
      default: [],
    },
    ageRange: {
      min: { type: Number, default: 0 },
      max: { type: Number, default: 0 },
    },
    phone: {
      type: String,
      default: null,
    },
    email: {
      type: String,
      default: null,
    },
    website: {
      type: String,
      default: null,
    },
    category: {
      type: String,
      default: null,
    },
  },
  {
    versionKey: false,
    collection: "SimplifiedSupportResources",
  },
);

export const SimplifiedSupportResourceModel = model<ISimplifiedSupportResource>(
  "SimplifiedSupportResource",
  SimplifiedSupportResourceSchema,
);
