import mongoose, { Schema, Document } from 'mongoose'

// SupportResources collection entry
export interface ISupportResource extends Document {
  name: { type: string; required: true }
  provider_name: { type: string; required: true }
  age_range: {
    min: { type: number; required: true }
    max: { type: number; required: true }
  }
  tags: { type: string[]; required: true }
  working_hours: { type: WorkingHour[]; required: true }
  type: { type: Type; required: true }
}

enum Type {
  email = 'email',
  phone = 'phone',
  webchat = 'webchat'
}

interface WorkingHour {
  from: {
    hour: { type: number; required: true }
    minute: { type: number; required: true }
  }
  to: {
    hour: { type: number; required: true }
    minute: { type: number; required: true }
  }
}

const WorkingHourSchema: Schema<WorkingHour> = new Schema({
  from: {
    hour: { type: Number, required: true },
    minute: { type: Number, required: true }
  },
  to: {
    hour: { type: Number, required: true },
    minute: { type: Number, required: true }
  }
})

const SupportResourceSchema: Schema<ISupportResource> = new Schema(
  {
    name: { type: String, required: true },
    provider_name: { type: String, required: true },
    age_range: {
      min: { type: Number, required: true },
      max: { type: Number, required: true }
    },
    tags: { type: [String], required: true },
    working_hours: { type: [WorkingHourSchema], required: true, default: [] },
    type: { type: Type, required: true }
  },
  { collection: 'SupportResources' }
)
export const SupportResource = mongoose.model<ISupportResource>(
  'SupportResource',
  SupportResourceSchema
)
