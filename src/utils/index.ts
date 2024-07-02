export function getMonthName(dateString: string) {
  const [month, day, year] = dateString
    .split("-")
    .map((part) => parseInt(part, 10));
  const date = new Date(year, month - 1, day); // Create a Date object
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return monthNames[date.getMonth()]; // Get the month name
}

export function formatCompactNumber(count: number) {
  const formatter = Intl.NumberFormat("en", { notation: "compact" });
  return formatter.format(count);
}

export const toGibibytes = (
  input: number,
  options?: { hideUnit?: boolean }
) => {
  if (!input) return "";
  if (input > 1024 ** 3) {
    return (input / 1024 ** 3).toFixed(2) + (options?.hideUnit ? "" : "GB");
  } else if (input > 1024 ** 2) {
    return (input / 1024 ** 2).toFixed(2) + (options?.hideUnit ? "" : "MB");
  } else if (input > 1024) {
    return (input / 1024).toFixed(2) + (options?.hideUnit ? "" : "KB");
  } else {
    return input + (options?.hideUnit ? "" : "B");
  }
};
