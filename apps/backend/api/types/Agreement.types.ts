export interface IAgreement extends Document {
  id: { type: string; required: true };
  code: { type: string; required: true };
  origin_code: { type: string; required: true };
  service_type: { type: string; required: true };
  service_name: { type: string; required: true };
  amount: { type: number; required: true };
  provider_code: { type: string; required: true };
  year: { type: number; required: true };
}
