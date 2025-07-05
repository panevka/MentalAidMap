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
  email = "email",
  phone = "phone",
  webchat = "webchat",
}

export enum RRuleFrequency {
  Yearly = "yearly",
  Weekly = "weekly",
  Monthly = "monthly",
  Daily = "daily",
  Hourly = "hourly",
  Minutely = "minutely",
  Secondly = "secondly",
}

export enum RRuleByDay {
  Monday = "mo",
  Tuesday = "tu",
  Wednesday = "we",
  Thursday = "th",
  Friday = "fr",
  Saturday = "sa",
  Sunday = "su",
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
