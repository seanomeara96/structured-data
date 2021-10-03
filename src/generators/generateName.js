/**
 *
 * @param {string} name
 * @returns`<div itemprop="name">${name}</div>`
 */
export default function generateName(name = "") {
  if (name.length) {
    return `<div itemprop="name">${name}</div>`;
  }
  return "";
}
