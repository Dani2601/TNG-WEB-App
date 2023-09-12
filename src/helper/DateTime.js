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


export function convertToNormalTime(militaryTime) {
  const militaryTimeArray = militaryTime.split(':');
  let hours = parseInt(militaryTimeArray[0], 10);
  const minutes = militaryTimeArray[1];

  let period = 'AM';

  if (hours >= 12) {
    period = 'PM';
    if (hours > 12) {
      hours -= 12;
    }
  }

  if (hours === 0) {
    hours = 12; // Convert midnight (00:00) to 12:00 AM
  }

  return `${hours}:${minutes} ${period}`;
}