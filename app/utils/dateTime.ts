export function formatSlotRange(time: string) {
  const [hourPart, minutePart] = time.split(":");
  const hour = Number(hourPart);
  const minute = Number(minutePart);

  const start = new Date(2026, 0, 1, hour, minute);
  const end = new Date(2026, 0, 1, hour, minute + 60);

  const formatClock = (date: Date) => {
    const hours24 = date.getHours();
    const hours12 = hours24 % 12 === 0 ? 12 : hours24 % 12;
    return `${String(hours12).padStart(2, "0")}.${String(date.getMinutes()).padStart(2, "0")}`;
  };

  const meridiem = end.getHours() < 12 ? "am" : "pm";
  return `${formatClock(start)} - ${formatClock(end)} ${meridiem}`;
}
