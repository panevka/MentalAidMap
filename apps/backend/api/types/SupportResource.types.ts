import { RRuleByDay, RRuleFrequency } from "./RRule.types";

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
