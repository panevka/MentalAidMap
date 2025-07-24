import { RRuleByDay } from "@shared/database/SupportResource.types";
import { getFirstRruleOccurence } from "../utils/rrule";

describe("calculates first rrule occurence of a given date", () => {
  test("", () => {
    const weekdays: RRuleByDay[] = ["su", "tu", "mo"];
    expect(getFirstRruleOccurence(new Date("2025-07-23"), weekdays));
  });
});
