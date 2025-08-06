import { RRuleByDay } from "@shared/database/SupportResource.types";
import { DateTime } from "luxon";

export const getDailyOccurences = (
  dtstart: DateTime,
  interval: number,
  count: number,
): DateTime[] => {
  if (count === 0) {
    return [];
  } else {
    const nextDate = DateTime.fromSeconds(dtstart.toSeconds()).plus({
      day: interval,
    });

    return [dtstart, ...getDailyOccurences(nextDate, interval, count - 1)];
  }
};

export const getWeeklyOccurences = (
  dtstart: DateTime,
  weekdays: RRuleByDay[],
  interval: number,
  count: number,
): DateTime[] => {
  if (count == 0 || weekdays.length == 0) {
    return [];
  } else {
    const rruleWeekdayMap: Record<RRuleByDay, number> = {
      mo: 1,
      tu: 2,
      we: 3,
      th: 4,
      fr: 5,
      sa: 6,
      su: 7,
    };
    const sortByAscending = (a: DateTime, b: DateTime) =>
      a < b ? -1 : a > b ? 1 : 0;

    const sameWeekOccurences: DateTime[] = weekdays
      .map((weekday) => {
        const weekdayNumber = rruleWeekdayMap[weekday];
        const dayDiff = weekdayNumber - dtstart.weekday;

        const newOccurence = DateTime.fromMillis(dtstart.toMillis()).plus({
          days: dayDiff,
        });
        return newOccurence;
      })
      .filter((date): date is DateTime => date !== null)
      .sort(sortByAscending);

    const upcomingWeekOccurences = sameWeekOccurences
      .filter((occurence) => occurence >= dtstart)
      .slice(0, count);

    const nextReoccurence =
      upcomingWeekOccurences?.[0]?.plus({
        weeks: interval,
      }) || dtstart.plus({ weeks: interval });

    return [
      ...upcomingWeekOccurences,
      ...getWeeklyOccurences(
        nextReoccurence,
        weekdays,
        interval,
        count - upcomingWeekOccurences.length,
      ),
    ];
  }
};
