export const formatAgeRange = (min: number | null, max: number | null) => {
  if (min != null && max != null) {
    return `${min} - ${max}`;
  }
  if (min == null && max == null) {
    return "bez ograniczeń";
  }
  if (max == null) {
    return `${min}+`;
  }
  if (min == null) {
    return `<${max}`;
  }
};
