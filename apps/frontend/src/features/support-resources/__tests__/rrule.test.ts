import { DateTime } from "luxon";
import { getDailyOccurences } from "../utils/rrule";

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
