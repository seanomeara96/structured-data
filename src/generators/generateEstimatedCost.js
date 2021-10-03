/**
 * estimated cost in eur
 * @param {number} cost
 * @returns
 */
export default function generateEstimatedCost(cost = 0) {
  if (cost) {
    return `<div>About <span itemprop="estimatedCost" itemscope itemtype="https://schema.org/MonetaryAmount">
    <meta itemprop="currency" content="EUR"/>
    <meta itemprop="value" content="cost"/>
    €${cost}
  </span>
  </div>`;
  }
  return "";
}
