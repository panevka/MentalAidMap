import { DateTime } from "luxon";

export const getDailyOccurences = (
  dtstart: DateTime,
  interval: number,
  count: number,
) => {
  if (count === 0) {
    return [];
  } else {
    const nextDate = DateTime.fromSeconds(dtstart.toSeconds()).plus({
      day: interval,
    });

    return [dtstart, ...getDailyOccurences(nextDate, interval, count - 1)];
  }
};
