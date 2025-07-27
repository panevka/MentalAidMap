import { getTimeDifference } from "../utils/time";

describe("calculates time difference between two dates", () => {
  it("should throw error caused by precedence of endDate over startState", () => {
    const startDate = new Date(2024, 3, 2);
    const endDate = new Date(2024, 3, 1);

    expect(() => getTimeDifference(startDate, endDate)).toThrow();
  });
});

describe("calculates time difference between two dates", () => {
  it("should throw error caused by precedence of endDate over startState", () => {
    const startDate = new Date(2024, 3, 2);
    const endDate = new Date(2024, 3, 1);

    expect(() => getTimeDifference(startDate, endDate)).toThrow();
  });
});
