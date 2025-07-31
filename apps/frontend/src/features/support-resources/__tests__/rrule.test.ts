import {
  RRuleByDay,
  RRuleFrequency,
} from "@shared/database/SupportResource.types";
import { getFirstRruleOccurence, getUpcomingOccurence } from "../utils/rrule";

describe("calculates first rrule occurence of a given date", () => {
  it("should return Sunday as the first occurrence after Wednesday 2025-07-23", () => {
    const weekdays: RRuleByDay[] = ["su", "tu", "mo"];
    const date = new Date("2025-07-23T00:00:00Z"); // wednesday
    const expected = new Date("2025-07-27T00:00:00Z").getTime(); // sunday

    expect(getFirstRruleOccurence(date, weekdays)).toBe(expected);
  });

  it("should not return Wednesday (2025-07-23) as the first occurrence after Wednesday 2025-07-23", () => {
    const weekdays: RRuleByDay[] = ["we", "mo"];
    const date = new Date("2025-07-23T00:00:00Z"); // wednesday

    expect(getFirstRruleOccurence(date, weekdays)).not.toBe(date);
  });
});

describe("return first upcoming occurence from a current date", () => {
  it("should return August 3rd as the next occurrence after July 27th for a weekly event that started on July 7th and recurs every Sunday", () => {
    const firstOccurence = new Date(Date.UTC(2025, 6, 13));
    const currentDate = new Date(Date.UTC(2025, 6, 27));
    const weekdays: RRuleByDay[] = ["su"];
    const frequency: RRuleFrequency = "weekly";
    const interval: number = 1;
    const expected = new Date(Date.UTC(2025, 7, 3)).getTime();

    const actual = getUpcomingOccurence(
      firstOccurence,
      currentDate,
      weekdays,
      frequency,
      interval,
    );

    expect(actual).toEqual(expected);
  });
});
