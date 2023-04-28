const convertTo24HrsFormat = (timeText) => {
  const timeTextLower = timeText.toLowerCase();
  let [hours, mins] = timeTextLower.split(":");

  if (timeTextLower.endsWith("am")) {
    hour = hours === "12" ? "0" : hours;
  } else if (timeTextLower.endsWith("pm")) {
    hours = hours === "12" ? hours : String(+hours + 12);
  }

  return hours.padStart(2, 0) + ":" + mins.slice(0, -2).padStart(2, 0);
};

console.log(convertTo24HrsFormat("12:10AM"));
