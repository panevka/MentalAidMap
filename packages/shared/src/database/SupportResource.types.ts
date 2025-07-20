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

export enum RRuleFrequency {
  YEARLY = "yearly",
  WEEKLY = "weekly",
  MONTHLY = "monthly",
  DAILY = "daily",
  HOURLY = "hourly",
  MINUTELY = "minutely",
  SECONDLY = "secondly",
}

export enum RRuleByDay {
  MONDAY = "mo",
  TUESDAY = "tu",
  WEDNESDAY = "we",
  THURSDAY = "th",
  FRIDAY = "fr",
  SATURDAY = "sa",
  SUNDAY = "su",
}

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
