export default function getDayFromDate(date: string) {
  const newDate = new Date(date);
  return newDate.toLocaleDateString("en-US", { weekday: "long" });
}
