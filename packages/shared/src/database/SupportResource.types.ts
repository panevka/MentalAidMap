// Colllection Entry
export interface ISupportResource {
  name: string;
  provider_name: string;
  age_range: IAgeRange;
  tags: string[];
  availability: IAvailability;
  support_type: SupportType;
}

// Related type declarations
//
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
  patterns: IAvailabilityPattern[];
  additional_dates?: Date[];
}
