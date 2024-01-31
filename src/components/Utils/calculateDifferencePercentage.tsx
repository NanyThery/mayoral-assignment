export default function calculateDifferencePercentage(
  price: string | number,
  comparedPrice: string | number,
): string {
  const parsedPrice = typeof price === 'string' ? parseFloat(price) : price;
  const parsedComparedPrice =
    typeof comparedPrice === 'string' ? parseFloat(comparedPrice) : comparedPrice;

  // Check if parsedPrice and parsedComparedPrice are valid numbers and comparedPrice is not zero
  if (isNaN(parsedPrice) || isNaN(parsedComparedPrice) || parsedComparedPrice === 0) {
    return `0%`;
  }

  // calculate % of discount between comparedpaPrice and price
  const discount = Math.trunc(((parsedPrice - parsedComparedPrice) / parsedComparedPrice) * 100);

  return `${discount}%`;
}
