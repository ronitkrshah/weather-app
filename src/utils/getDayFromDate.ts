export default function getDayFromDate(date: string) {
  // Current Date (Today)
  const currDate = new Date();

  // Date from Param
  const newDate = new Date(date);

  // Return Today
  if (currDate.getDate() == newDate.getDate()) {
    return "Today";
  }

  currDate.setDate(currDate.getDate() + 1);

  // Return Tomorrow
  if (currDate.getDate() == newDate.getDate()) {
    return "Tomorrow";
  }

  return newDate.toLocaleDateString("en-US", { weekday: "long" });
}
