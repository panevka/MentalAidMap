/**
 * Returns the time difference between two dates in milliseconds.
 */
export const getTimeDifference = (startDate: Date, endDate: Date): number => {
  const startDateMs = startDate.getTime();
  const endDateMs = endDate.getTime();

  if (startDateMs > endDateMs) throw new Error("endDate preceeds startDate");

  return endDateMs - startDateMs;
};
