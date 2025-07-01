// Colllection Entry
export interface ISupportResource {
  name: { type: string; required: true };
  provider_name: { type: string; required: true };
  age_range: {
    min: { type: number; required: true };
    max: { type: number; required: true };
  };
  tags: { type: string[]; required: true };
  availability: { type: IAvailability; required: true };
  type: { type: Type; required: true };
}

// Related type declarations
export type RRuleFrequency =
  | "yearly"
  | "weekly"
  | "monthly"
  | "daily"
  | "hourly"
  | "minutely"
  | "secondly";

export type RRuleByDay = "mo" | "tu" | "we" | "th" | "fr" | "sa" | "su";

export interface IAvailabilityPattern {
  start_time: { hour: number; minute: number };
  end_time: { hour: number; minute: number };
  rrule: {
    freq: RRuleFrequency;
    count: number;
    interval: number;
    by_day: RRuleByDay[];
  };
  excluded_dates?: Date[];
}

export interface IAvailability {
  patterns: IAvailabilityPattern[];
  additonal_dates?: Date[];
}

export enum Type {
  email = "email",
  phone = "phone",
  webchat = "webchat",
}
