import generateImage from "./generateImage";
import generateName from "./generateName";
import generateUrl from "./generateUrl";
/**
 * a tool is used but not consumed during the how to process
 */
/**
 *
 * @param {string} toolName
 * @param {string} toolUrl link to tool
 * @param {string} imgUrl link to img url
 * @param {string} imgAlt link to img
 * @returns
 */
export default function generateHowToTool(
  toolName,
  toolUrl = "",
  imgUrl = "",
  imgAlt = ""
) {
  console.log(imgUrl);
  const tool = generateName(toolName);
  return `<div itemprop="tool" itemscope itemtype="https://schema.org/HowToTool">
    ${toolUrl.length ? generateUrl(toolUrl, tool) : tool}
    ${imgUrl.length ? generateImage(imgUrl, imgAlt) : ""}
  </div>`;
}
