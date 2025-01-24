import mongoose, { Schema, Document } from 'mongoose';

// Providers collection entry
export interface IProvider extends Document {
	code: { type: string, required: true },
	nip: { type: string, required: true },
	regon: { type: string, required: true },
	registry_number: { type: String, required: true },
	name: { type: string, required: true },
	phone: { type: string, required: true },
	agreements: { type: string[], required: true },
}

const ProviderSchema: Schema<IProvider> = new Schema({
	code: { type: String, required: true },
	nip: { type: String, required: true },
	regon: { type: String, required: true },
	registry_number: { type: String, required: true },
	name: { type: String, required: true },
	phone: { type: String, required: true, default: null },
	agreements: { type: [String], required: true, default: [] },
});
export const Provider = mongoose.model<IProvider>('Provider', ProviderSchema);

// ProviderAddresses collection entry
interface Location {
	type: "Point";
	coordinates: [number, number];
}

const LocationSchema = new Schema({
	type: { type: String, enum: ["Point"], required: true },
	coordinates: { type: [Number], required: true }
});

export interface IProviderAddress extends Document {
	code: { type: string, required: true },
	city: { type: string, required: true },
	street: { type: string, required: true },
	building_number: { type: String, required: true },
	district: { type: string, required: true },
	post_code: { type: string, required: true },
	voivodeship: { type: string, required: true },
	location: Location
}

const ProviderAddressSchema: Schema<IProviderAddress> = new Schema({
	code: { type: String, required: true },
	city: { type: String, required: true },
	street: { type: String, required: true },
	building_number: { type: String, required: true },
	district: { type: String, required: true },
	post_code: { type: String, required: true },
	voivodeship: { type: String, required: true },
	location: { type: LocationSchema, required: true }
});
export const ProviderAddress = mongoose.model<IProviderAddress>('ProviderAddress', ProviderAddressSchema);

// Agreements collection entry
export interface IAgreement extends Document {
	id: { type: string, required: true },
	code: { type: string, required: true },
	origin_code: { type: string, required: true },
	service_type: { type: string, required: true },
	service_name: { type: string, required: true },
	amount: { type: Number, required: true },
	provider_code: { type: string, required: true },
	year: { type: Number, required: true },
}

const AgreementSchema: Schema<IAgreement> = new Schema({
	id: { type: String, required: true },
	code: { type: String, required: true },
	origin_code: { type: String, required: true },
	service_type: { type: String, required: true },
	service_name: { type: String, required: true },
	amount: { type: Number, required: true },
	provider_code: { type: String, required: true },
	year: { type: Number, required: true },
});
export const Agreement = mongoose.model<IAgreement>('Agreement', AgreementSchema);
