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
  working_hours: { type: IWorkingWeek; required: true }
  type: { type: Type; required: true }
}

enum Type {
  email = 'email',
  phone = 'phone',
  webchat = 'webchat'
}

interface IWorkingHour {
  from: {
    hour: { type: number; required: true }
    minute: { type: number; required: true }
  }
  to: {
    hour: { type: number; required: true }
    minute: { type: number; required: true }
  }
}

interface IWorkingWeek {
  monday: { type: IWorkingHour; required: true }
  tuesday: { type: IWorkingHour; required: true }
  wednesday: { type: IWorkingHour; required: true }
  thursday: { type: IWorkingHour; required: true }
  friday: { type: IWorkingHour; required: true }
  saturday: { type: IWorkingHour; required: true }
  sunday: { type: IWorkingHour; required: true }
}

const WorkingHourSchema: Schema<IWorkingHour> = new Schema({
  from: {
    hour: { type: Number, required: true },
    minute: { type: Number, required: true }
  },
  to: {
    hour: { type: Number, required: true },
    minute: { type: Number, required: true }
  }
})

const TypeSchema: Schema<Type> = new Schema({
  enum: ['email', 'phone', 'webchat']
})

const WorkingWeekSchema: Schema<IWorkingWeek> = new Schema({
  monday: { type: WorkingHourSchema, required: true },
  tuesday: { type: WorkingHourSchema, required: true },
  wednesday: { type: WorkingHourSchema, required: true },
  thursday: { type: WorkingHourSchema, required: true },
  friday: { type: WorkingHourSchema, required: true },
  saturday: { type: WorkingHourSchema, required: true },
  sunday: { type: WorkingHourSchema, required: true }
})

const SupportResourceSchema: Schema<ISupportResource> = new Schema(
  {
    name: { type: String, required: true },
    provider_name: { type: String, required: true },
    age_range: {
      minInclusive: { type: Number, required: true, min: 0 },
      maxExclusive: { type: Number, required: true, min: 0 }
    },
    tags: { type: [String], required: true },
    working_hours: { type: WorkingWeekSchema, required: true, default: [] },
    type: { type: TypeSchema, required: true }
  },
  { collection: 'SupportResources' }
)
export const SupportResource = mongoose.model<ISupportResource>('SupportResource', SupportResourceSchema)
