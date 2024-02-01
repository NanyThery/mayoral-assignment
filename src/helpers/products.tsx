import { Clothes } from 'types/clothes.interface';
import calculateDifferencePercentage from 'utils/calculateDifferencePercentage';
import formatEuro from 'utils/formatEuro';

const CLOTHES_URL = process.env.API_URL;
// empty array: https://run.mocky.io/v3/a79c1856-7cd8-4ba3-884d-b0657b63ba76
// clothes: 'https://run.mocky.io/v3/b4d26680-f43c-40f1-b54c-14668f104f60'

export async function fetchProducts() {
  const res = await fetch(CLOTHES_URL);
  const data = (await res.json()) as Clothes[];
  return data;
}

export function mapProducts(products: Clothes[]) {
  return products.map((product) => {
    const isReduced = product.comparedPrice > product.price;
    return {
      priceEur: formatEuro(product.price),
      comparedPriceEur: (product.comparedPrice && formatEuro(product.comparedPrice)) || '0',
      differencePercentage:
        (isReduced && calculateDifferencePercentage(product.price, product.comparedPrice)) || null,
      isReduced,
      colors: product.colors || [],
      ...product,
    };
  });
}

export async function fetchAllProducts(): Promise<Clothes[]> {
  const rawProducts = await fetchProducts();
  const products = mapProducts(rawProducts);
  return products;
}

export async function searchProducts(searchParams: URLSearchParams): Promise<Clothes[]> {
  const query = searchParams.get('query');
  const sort = searchParams.get('sort');

  const rawProducts = await fetchProducts();
  const mappedProducts = mapProducts(rawProducts);

  // This emulates what an external API would do before sending the response
  const filteredProducts = filterProducts(mappedProducts, query);
  const sortedProducts = sortProducts(filteredProducts, sort);

  return sortedProducts;
}

function filterProducts(products: Clothes[], query: string): Clothes[] {
  if (!query) return products;
  return products.filter((product) => product.title.toLowerCase().includes(query.toLowerCase()));
}

export function sortProducts(products: Clothes[], sort: string) {
  switch (sort) {
    case 'priceAsc':
      return products.sort((a, b) => a.price - b.price);
    case 'priceDesc':
      return products.sort((a, b) => b.price - a.price);
    default:
      return products;
  }
}
