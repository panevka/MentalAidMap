import {
  RRuleByDay,
  RRuleFrequency,
} from "@shared/database/SupportResource.types";
import { getDateIncrementedByDays, getTimeDifference } from "./time";

/**
 * Returns the first occurrence date matching the rule.
 * The returned Date is normalized to midnight UTC (00:00:00Z) and returned as a number (ms since epoch).
 */
export const getFirstRruleOccurence = (
  dtstart: Date,
  weekdays: RRuleByDay[],
): number => {
  if (!weekdays || !(weekdays.length >= 0)) throw new Error("Wrong param");

  const dtstartRruleWeekdayName: RRuleByDay = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
  })
    .format(dtstart)
    .toLowerCase()
    .slice(0, 2) as RRuleByDay;
  const obj = {
    mo: 0,
    tu: 1,
    we: 2,
    th: 3,
    fr: 4,
    sa: 5,
    su: 6,
  } satisfies Record<RRuleByDay, number>;
  /**
   * Sorts an array of weekday names based on their proximity to a reference weekday (`dtstart`).
   *
   * Weekdays are ordered from the closest upcoming weekday (without including the same day)
   * to the furthest, relative to the day of `dtstart`.
   *
   * Example:
   * Given:
   *   - dtstart occurs on Friday
   *   - weekdays = ["th", "mo", "fr"]
   *
   * the sorted result will be: ["mo", "th", "fr"]
   * because:
   *   - "mo" is 3 days after "fr"
   *   - "th" is 6 days after "fr"
   *   - "fr" is 0 days after "fr"
   */
  const sortedWeekdays = weekdays.sort((a: RRuleByDay, b: RRuleByDay) => {
    const weekdayNum = obj[dtstartRruleWeekdayName];
    const val1: number = obj[a];
    const val2: number = obj[b];

    if (val1 > weekdayNum && val2 > weekdayNum) {
      if (val1 > val2) return 1;
      if (val1 < val2) return -1;
      return 0;
    }

    if (val1 > weekdayNum) return -1;
    if (val2 > weekdayNum) return 1;

    if (val1 < val2) return -1;
    if (val1 > val2) return 1;
    return 0;
  });

  const closestUpcomingWeekday = sortedWeekdays[0];

  /**
   * Calculates the number of days from a given start weekday
   * until the next occurrence of a target weekday.
   *
   * This function only counts forward in time and **does not include the start day itself**.
   * For example:
   * - From Friday to Thursday returns 6 (counts days until upcoming Thursday).
   * - From Friday to the next Friday returns 7 (not 0),
   *   because the current day is excluded and it counts the full week until the next Friday.
   *
   */
  const getDaysUntilNextWeekday = (
    startWeekday: RRuleByDay,
    targetWeekday: RRuleByDay,
  ) => {
    const dtstartNum = obj[startWeekday];
    const upcomingWeekdayNum = obj[targetWeekday];

    if (upcomingWeekdayNum > dtstartNum) {
      return upcomingWeekdayNum - dtstartNum;
    } else {
      return 7 - dtstartNum + upcomingWeekdayNum;
    }
  };

  const daysToNextWeekday = getDaysUntilNextWeekday(
    dtstartRruleWeekdayName,
    closestUpcomingWeekday,
  );

  const firstOccurence = getDateIncrementedByDays(dtstart, daysToNextWeekday);

  return firstOccurence;
};

const getUpcomingOccurence = (
  currentDate: Date,
  weekdays: RRuleByDay[],
  frequency: RRuleFrequency = "weekly",
  interval = 2,
): number => {
  return 1;
};
