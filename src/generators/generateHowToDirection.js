/**
 * 
 * @param {string} text e.g. Allow the thin-set mortar to set. This usually takes about 12 hours.
      Don't mix the grout before the mortar is set, because you don't want the grout to dry out!
      To apply, cover the area thoroughly with grout and make sure you fill all the joints by
      spreading it across the tiles vertically, horizontally, and diagonally. Then fill any
      remaining voids with grout.
 * @returns 
 */
export default function generateHowToDirection(text = "") {
  if (text.length) {
    return `<div itemprop="itemListElement" itemscope itemtype="https://schema.org/HowToDirection">
    <div itemprop="text">${text}</div>
  </div>`;
  }
  return "";
}
