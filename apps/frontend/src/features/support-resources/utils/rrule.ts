import {
  RRuleByDay,
  RRuleByDayArray,
  RRuleFrequency,
} from "@shared/database/SupportResource.types";
import { getTimeDifference, addToDate } from "./time";

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

  const sortedWeekdays = sortByUpcomingRruleWeekdays(
    dtstartRruleWeekdayName,
    weekdays,
  );

  const closestUpcomingWeekday = sortedWeekdays[0];

  const daysToNextWeekday = getDaysUntilNextRruleWeekday(
    dtstartRruleWeekdayName,
    closestUpcomingWeekday,
  );

  const firstOccurence = addToDate(dtstart, daysToNextWeekday, "day").getTime();

  return firstOccurence;
};

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
const getDaysUntilNextRruleWeekday = (
  startWeekday: RRuleByDay,
  targetWeekday: RRuleByDay,
) => {
  const rruleWeekdayMap = {
    mo: 0,
    tu: 1,
    we: 2,
    th: 3,
    fr: 4,
    sa: 5,
    su: 6,
  } satisfies Record<RRuleByDay, number>;

  const dtstartNum = rruleWeekdayMap[startWeekday];
  const upcomingWeekdayNum = rruleWeekdayMap[targetWeekday];

  if (upcomingWeekdayNum > dtstartNum) {
    return upcomingWeekdayNum - dtstartNum;
  } else {
    return 7 - dtstartNum + upcomingWeekdayNum;
  }
};

export const sortByUpcomingRruleWeekdays = (
  currentWeekday: RRuleByDay,
  weekdays: RRuleByDay[],
): RRuleByDay[] => {
  const rruleWeekdayMap = {
    mo: 0,
    tu: 1,
    we: 2,
    th: 3,
    fr: 4,
    sa: 5,
    su: 6,
  } satisfies Record<RRuleByDay, number>;

  const sortedWeekdays = weekdays.sort((a: RRuleByDay, b: RRuleByDay) => {
    const weekdayNum = rruleWeekdayMap[currentWeekday];
    const val1: number = rruleWeekdayMap[a];
    const val2: number = rruleWeekdayMap[b];

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

  return sortedWeekdays;
};

export const getUpcomingOccurence = (
  firstOccurence: Date,
  currentDate: Date,
  weekdays: RRuleByDay[],
  frequency: RRuleFrequency = "weekly",
  interval: number = 2,
): number => {
  const timeDifferenceInMs = getTimeDifference(firstOccurence, currentDate);
  const timeDifferenceInDays = Math.floor(
    timeDifferenceInMs / 1000 / 60 / 60 / 24,
  );

  const frequencyInDays = (function IIFE() {
    switch (frequency) {
      case "weekly":
        return 7;
    }
  })();

  const frequenciesInTimeDifference = Math.floor(
    timeDifferenceInDays / frequencyInDays,
  );
  const occurencesInTimeDifference = Math.floor(
    frequenciesInTimeDifference / interval,
  );

  const latestOccurence = addToDate(
    firstOccurence,
    interval * frequencyInDays * occurencesInTimeDifference,
    "day",
  );

  const latestOccurenceRruleWeekdayName: RRuleByDay = new Intl.DateTimeFormat(
    "en-US",
    {
      weekday: "long",
    },
  )
    .format(latestOccurence)
    .toLowerCase()
    .slice(0, 2) as RRuleByDay;

  const sortedUpcomingWeekdays = sortByUpcomingRruleWeekdays(
    latestOccurenceRruleWeekdayName,
    weekdays,
  );

  const rruleWeekdayMap = {
    mo: 0,
    tu: 1,
    we: 2,
    th: 3,
    fr: 4,
    sa: 5,
    su: 6,
  } satisfies Record<RRuleByDay, number>;

  if (
    sortedUpcomingWeekdays[0] === undefined ||
    rruleWeekdayMap[sortedUpcomingWeekdays[0]] <
      rruleWeekdayMap[latestOccurenceRruleWeekdayName]
  ) {
    const upcomingOccurence = addToDate(
      new Date(latestOccurence),
      interval * frequencyInDays,
      "day",
    );
    return upcomingOccurence.getTime();
  } else {
    const daysToNextOccurence = getDaysUntilNextRruleWeekday(
      latestOccurenceRruleWeekdayName,
      sortedUpcomingWeekdays[0],
    );

    const upcomingOccurence = addToDate(
      latestOccurence,
      daysToNextOccurence,
      "day",
    );

    return upcomingOccurence.getTime();
  }
};
