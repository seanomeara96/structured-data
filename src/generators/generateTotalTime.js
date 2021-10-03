/**
 * i have decided that the time interval will either be minutes or hours
 */
/**
 *
 * @param {string} timeInterval
 * @param {number} duration
 * @returns string
 */
export default function generateTotalTime(
  timeInterval = "minutes",
  duration = 0
) {
  if (duration) {
    return `<div>About <span itemprop="totalTime" content="PT${duration}${
      timeInterval === "hours" ? "H" : "M"
    }">${duration} ${timeInterval}</span></div>`;
  }
  return "";
}
