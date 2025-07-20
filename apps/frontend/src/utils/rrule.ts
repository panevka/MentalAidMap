const getFirstRruleOccurence = (dtstart: Date, weekdays: string[]) => {
  const dtstartDate = new Date(dtstart);

  const dtstartRruleWeekdayName = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
  })
    .format(dtstartDate)
    .toLowerCase()
    .slice(0, 2);

  const obj = new Map([
    ["mo", 0],
    ["tu", 1],
    ["we", 2],
    ["th", 3],
    ["fr", 4],
    ["sa", 5],
    ["su", 6],
  ]);

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
  const sortedWeekdays = weekdays.sort((a, b) => {
    const weekdayNum = obj.get(dtstartRruleWeekdayName);
    const val1 = obj.get(a);
    const val2 = obj.get(b);

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

  const daysToClosestUpcomingWeekday = (dtstartWeekday, upcomingWeekday) => {
    const dtstartNum = obj.get(dtstartWeekday);
    const upcomingWeekdayNum = obj.get(upcomingWeekday);

    if (upcomingWeekdayNum > dtstartNum) {
      return upcomingWeekdayNum - dtstartNum;
    } else {
      return 7 - dtstartNum + upcomingWeekdayNum;
    }
  };

};
