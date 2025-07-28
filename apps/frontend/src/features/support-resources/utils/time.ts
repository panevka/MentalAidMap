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

export function getDateIncrementedByDays(currentDate: Date, daysToAdd: number) {
  /**
   * JavaScript handles date overflow automatically.
   * For example:
   *  - Adding 15 days to May 21st moves the date into June.
   *  - Adding 5 days to December 29th moves the date into January of the next year.
   *
   * In both cases, the month and year values are adjusted accordingly.
   */
  const currentDateUTC = convertDateToUTC(currentDate);
  const newDate = new Date(currentDateUTC).setDate(
    currentDate.getDate() + daysToAdd,
  );
  return newDate;
}
