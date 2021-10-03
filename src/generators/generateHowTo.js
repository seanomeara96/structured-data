export default function generateHowTo(children = []) {
  return `<div itemscope itemtype="https://schema.org/HowTo">${children.join(
    "\n"
  )}
  </div>`;
}
