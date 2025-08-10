// Colllection Entry
export interface ISupportResource {
  name: string;
  description: string;
  providers: string[];
  age_range: IAgeRange;
  tags: string[];
  services: IService[];
}

// Related type declarations
export const ChargeArray = ["free", "paid", "operator"] as const;
export type Charge = (typeof ChargeArray)[number];

export interface IService {
  support_type: SupportType;
  contact: string;
  shifts: IShift[];
  charge: Charge;
}

export interface IShift {
  responder_profession: string;
  event?: string;
  availability: IAvailability;
}

export interface IAgeRange {
  minInclusive: number;
  maxExclusive: number;
}

export enum SupportType {
  EMAIL = "email",
  PHONE = "phone",
  WEBCHAT = "webchat",
}

export const RRuleFrequencyArray = [
  "yearly",
  "monthly",
  "weekly",
  "daily",
] as const;
export type RRuleFrequency = (typeof RRuleFrequencyArray)[number];

export const RRuleByDayArray = [
  "mo",
  "tu",
  "we",
  "th",
  "fr",
  "sa",
  "su",
] as const;
export type RRuleByDay = (typeof RRuleByDayArray)[number];

export interface IAvailabilityPattern {
  start_time: ITime;
  end_time: ITime;
  rrule: IRRule;
  excluded_dates?: Date[];
}

export interface IRRule {
  freq: RRuleFrequency;
  count: number;
  interval: number;
  by_day: RRuleByDay[];
}

export interface ITime {
  hour: number;
  minute: number;
}

export interface IAvailability {
  timezone: string;
  patterns: IAvailabilityPattern[];
  additional_dates?: Date[];
}
