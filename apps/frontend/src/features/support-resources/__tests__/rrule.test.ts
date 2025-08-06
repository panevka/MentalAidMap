import { DateTime } from "luxon";
import { getDailyOccurences, getWeeklyOccurences } from "../utils/rrule";
import { RRuleByDay } from "@shared/database/SupportResource.types";

describe("getDailyOccurences", () => {
  it("should return an empty array when count is 0", () => {
    const dtstart = DateTime.local(2025, 8, 1);
    const interval = 1;
    const count = 0;
    const expected: DateTime[] = [];

    const actual = getDailyOccurences(dtstart, interval, count);
    expect(actual).toEqual(expected);
  });

  it("should return an array with one date when count is 1", () => {
    const dtstart = DateTime.local(2025, 8, 1);
    const interval = 1;
    const count = 1;
    const expected: DateTime[] = [DateTime.local(2025, 8, 1)];

    const actual = getDailyOccurences(dtstart, interval, count);
    expect(actual).toEqual(expected);
  });

  it("should return a sequence of dates with the correct interval when count > 1", () => {
    const dtstart = DateTime.local(2025, 8, 1);
    const interval = 2;
    const count = 5;
    const expected = [
      DateTime.local(2025, 8, 1),
      DateTime.local(2025, 8, 3),
      DateTime.local(2025, 8, 5),
      DateTime.local(2025, 8, 7),
      DateTime.local(2025, 8, 9),
    ];

    const actual = getDailyOccurences(dtstart, interval, count);

    expect(actual).toEqual(expected);
  });

  it("should not mutate the original dtstart object", () => {
    const dtstart = DateTime.local(2025, 8, 1);
    const dtstartCopy = DateTime.local(2025, 8, 1);

    const interval = 3;
    const count = 5;

    getDailyOccurences(dtstart, interval, count);

    expect(+dtstart === +dtstartCopy).toEqual(true);
  });
});

describe("getWeeklyOccurences", () => {
  it("returns occurrences on specified weekdays with given interval and count", () => {
    const dtstart = DateTime.local(2025, 8, 4); // Monday
    const weekdays: RRuleByDay[] = ["mo", "tu", "we"];
    const interval = 1;
    const count = 4;

    const result = getWeeklyOccurences(dtstart, weekdays, interval, count);

    const expectedDates = [
      DateTime.local(2025, 8, 4),
      DateTime.local(2025, 8, 5),
      DateTime.local(2025, 8, 6),
      DateTime.local(2025, 8, 11),
    ];

    expect(result).toHaveLength(expectedDates.length);

    for (let i = 0; i < expectedDates.length; i++) {
      expect(+result[1] === +expectedDates[i]);
    }
  });

  it("returns empty array if count is 0", () => {
    const dtstart = DateTime.now();
    const weekdays: RRuleByDay[] = ["mo", "we"];
    const interval = 1;
    const count = 0;

    const result = getWeeklyOccurences(dtstart, weekdays, interval, count);
    expect(result).toEqual([]);
  });
});
