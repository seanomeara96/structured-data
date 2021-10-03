import generateHowToDirection from "./generateHowToDirection";
import generateImage from "./generateImage";
import generateUrl from "./generateUrl";
import generateName from "./generateName";
/**
 * A step in the instructions for how to achieve a result. It is an ordered list with HowToDirection and/or HowToTip items.
/**
 * @param {number} stepNumber
 * @param {string} name
 * @param {string} urlForStep e.g. https://example.com/example#step4
 * @param {object[]} directions e.g. ["Allow the thin-set mortar to set. This usual...", "Then, with a moist sponge, sponge away the excess grout..."]
 * @param {string} imgSrc
 * @param {string} imgAlt
 * @returns
 */
export default function generateHowToStep(
  stepNumber = 1,
  name = "",
  urlForStep = "",
  directions = [],
  imgSrc = "",
  imgAlt = ""
) {
  return `<div id="step-${stepNumber}" itemprop="step" itemscope itemtype="https://schema.org/HowToStep">
    ${urlForStep.length ? generateUrl(urlForStep) : ""}
    ${name.length ? generateName(name) : ""}
    ${imgSrc.length ? generateImage(imgSrc, imgAlt) : ""}
    ${directions.map((i) => generateHowToDirection(i.content)).join("\n")}
  </div>`;
}
