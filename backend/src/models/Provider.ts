import mongoose, { Schema, Document } from 'mongoose';

export interface IProvider extends Document {
	"provider-code": { type: String, required: true },
	branch: { type: String, required: true },
	city: { type: String, required: true },
	street: { type: String, required: true },
	"house-number": { type: String, required: true },
	commune: { type: String, required: true },
	"post-code": { type: String, required: true },
	coordinates: {
		type: {
			lat: { type: Number, required: true },
			lon: { type: Number, required: true },
		},
		required: true,
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
	coordinates: {
		type: {
			lat: { type: Number, required: true },
			lon: { type: Number, required: true },
		},
		required: true,
	},
});

export default mongoose.model<IProvider>('Provider', ProviderSchema);
