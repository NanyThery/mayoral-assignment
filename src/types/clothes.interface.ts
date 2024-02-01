export interface Clothes {
  id: number;
  title: string;
  price: number;
  priceEur: string;
  comparedPriceEur: string;
  comparedPrice: number;
  isReduced: boolean;
  colors: string[];
  differencePercentage: string;
  featuredImage: string;
}
