export default function formatEuro(price: string | number): string {
  const formatter = new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  if (!price) {
    return formatter.format(0);
  }
  const parsedPrice = typeof price === 'string' ? parseFloat(price.replace(',', '.')) : price;

  return formatter.format(parsedPrice);
}
