export function convertToHoursMinutes(time) {
  const [hours, minutes] = time.split(":");

  const formattedHours =
    parseInt(hours, 10) !== 0
      ? `${parseInt(hours, 10)} Hour${parseInt(hours, 10) !== 1 ? "s" : ""}`
      : "";
  const formattedMinutes =
    parseInt(minutes, 10) !== 0
      ? `${parseInt(minutes, 10)} Min${parseInt(minutes, 10) !== 1 ? "s" : ""}`
      : "";

  const timeComponents = [formattedHours, formattedMinutes].filter(Boolean);

  return timeComponents.join(" ");
}
