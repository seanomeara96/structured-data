import generateImage from "./generateImage";
import generateName from "./generateName";
import generateUrl from "./generateUrl";
/**
 * a supply is used consumed during the how to process
 */
/**
 *
 * @param {string} supplyName
 * @param {string} supplyUrl link to supply
 * @param {string} imgUrl link to image of the supply
 * @param {string} imgAlt image alt
 * @returns
 */
export default function generateHowToSupply(
  supplyName,
  supplyUrl = "",
  imgUrl = "",
  imgAlt = ""
) {
  const supply = generateName(supplyName);
  return `<div itemprop="supply" itemscope itemtype="https://schema.org/HowToSupply">
   ${supplyUrl.length ? generateUrl(supplyUrl, supply) : supply}
   ${imgUrl.length ? generateImage(imgUrl, imgAlt) : ""}
  </div>`;
}
