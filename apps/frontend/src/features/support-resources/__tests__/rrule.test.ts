import { RRuleByDay } from "@shared/database/SupportResource.types";
import { getFirstRruleOccurence } from "../utils/rrule";

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
