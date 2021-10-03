/**
 *
 * @param {string} text
 * @param {string} url
 * @returns itemprop url
 */
export default function generateUrl(url = "", text = "") {
  if (url.length) {
    if (text.length) return `<a itemprop="url" href="${url}">${text}</a>`;
    return `<link itemprop="url" href="${url}" />`;
  }
  return "";
}
