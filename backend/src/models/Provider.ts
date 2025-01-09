import mongoose, { Schema, Document } from 'mongoose';

export interface IProvider extends Document {
	"provider-code": { type: String, required: true },
	branch: { type: String, required: true },
	city: { type: String, required: true },
	street: { type: String, required: true },
	"house-number": { type: String, required: true },
	commune: { type: String, required: true },
	"post-code": { type: String, required: true },
	location: {
		type: { type: String, required: true, enum: ['Point'] },
		coordinates: {
			type: [Number],
			required: true
		},
	},
}

const ProviderSchema: Schema<IProvider> = new Schema({
	"provider-code": { type: String, required: true },
	branch: { type: String, required: true },
	city: { type: String, required: true },
	street: { type: String, required: true },
	"house-number": { type: String, required: true },
	commune: { type: String, required: true },
	"post-code": { type: String, required: true },
	location: {
		type: { type: String, required: true, enum: ['Point'] },
		coordinates: {
			type: [Number],
			required: true
		},
	},
});

ProviderSchema.index({ location: '2dsphere' });
export default mongoose.model<IProvider>('Provider', ProviderSchema);
