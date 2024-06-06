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
