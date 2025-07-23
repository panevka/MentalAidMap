import { RRuleByDay } from "@shared/database/SupportResource.types";

const getFirstRruleOccurence = (dtstart: Date, weekdays: RRuleByDay[]) => {
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

  const daysToClosestUpcomingWeekday = (
    dtstartWeekday: RRuleByDay,
    upcomingWeekday: RRuleByDay,
  ) => {
    const dtstartNum = obj[dtstartWeekday];
    const upcomingWeekdayNum = obj[upcomingWeekday];

    if (upcomingWeekdayNum > dtstartNum) {
      return upcomingWeekdayNum - dtstartNum;
    } else {
      return 7 - dtstartNum + upcomingWeekdayNum;
    }
  };

  function addDaysToDate(currentDate, daysToAdd) {
    daysToAdd = daysToAdd || 0;

    const futureDate = new Date(currentDate);
    futureDate.setDate(futureDate.getDate() + daysToAdd);
    return futureDate;
  }

  const r = daysToClosestUpcomingWeekday(
    dtstartRruleWeekdayName,
    closestUpcomingWeekday,
  );
};
