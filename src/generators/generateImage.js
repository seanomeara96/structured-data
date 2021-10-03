/**
 *
 * @param {string} src e.g. https://example.com/photos/1x1/photo-step4.jpg
 * @param {string} altText
 * @returns
 */
export default function generateImage(src = "", altText = "") {
  if (src.length) {
    return `<img itemprop="image" alt="${altText}" src="${src}"/>`;
  }
  return "";
}
