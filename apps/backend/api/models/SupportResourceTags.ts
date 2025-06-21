import mongoose, { Schema, Document } from 'mongoose'

// SupportResourceTags collection entry
export interface ISupportResourceTag extends Document {
  name: { type: string; required: true }
}

const SupportResourceTagSchema: Schema<ISupportResourceTag> = new Schema(
  {
    name: { type: String, required: true }
  },
  { collection: 'SupportResourceTags' }
)
export const SupportResourceTag = mongoose.model<ISupportResourceTag>(
  'SupportResourceTag',
  SupportResourceTagSchema
)
