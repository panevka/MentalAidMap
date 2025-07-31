/**
 * Returns the time difference between two dates in milliseconds.
 */
export const getTimeDifference = (startDate: Date, endDate: Date): number => {
  const startDateMs = startDate.getTime();
  const endDateMs = endDate.getTime();

  if (startDateMs > endDateMs) throw new Error("endDate preceeds startDate");

  return endDateMs - startDateMs;
};

export function convertDateToUTC(date: Date): Date {
  return new Date(
    Date.UTC(
      date.getUTCFullYear(),
      date.getUTCMonth(),
      date.getUTCDate(),
      date.getUTCHours(),
      date.getUTCMinutes(),
      date.getUTCSeconds(),
    ),
  );
}

type TimeUnit = "day" | "week" | "month" | "year";
export function addToDate(date: Date, increment: number, unit: TimeUnit) {
  switch (unit) {
    case "day":
      date.setUTCDate(date.getUTCDate() + increment);
      break;
    case "week":
      date.setUTCDate(date.getUTCDate() + increment * 7);
      break;
    case "month":
      date.setUTCMonth(date.getUTCMonth() + increment);
      break;
    case "year":
      date.setUTCFullYear(date.getUTCFullYear() + increment);
  }

  return date;
}

export function isSameCalendarDate(date1: Date, date2: Date): boolean {
  if (date1.getUTCFullYear() != date2.getUTCFullYear()) return false;
  if (date1.getUTCMonth() != date2.getUTCMonth()) return false;
  if (date1.getUTCDate() != date2.getUTCDate()) return false;

  return true;
}
