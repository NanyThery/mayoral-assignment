import { filterProducts, mapProducts, searchProducts, sortProducts } from './products';
import products from '../mocks/products.json';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(products),
  }),
);

describe('mapProducts', () => {
  it('should correctly map product', () => {
    const rawData = products;

    const mappedProducts = mapProducts(rawData);

    // Check the length of the products
    expect(mappedProducts.length).toBe(rawData.length);

    // Check the additional properties mapped
    const firstProduct = mappedProducts[0];
    expect(firstProduct).toHaveProperty('priceEur');
    expect(firstProduct).toHaveProperty('comparedPriceEur');
    expect(firstProduct).toHaveProperty('differencePercentage');
    expect(firstProduct).toHaveProperty('isReduced');
  });

  it('should not crash when a property is not included from the api response', () => {
    const rawData = [
      {
        id: 1,
        title: 'Polo banda Better Cotton chico',
        price: 15.19,
        comparedPrice: 18.99,
      },
    ];

    const mappedProducts = mapProducts(rawData);

    // Check the length of the products
    expect(mappedProducts.length).toBe(rawData.length);

    // Check the additional properties mapped
    const firstProduct = mappedProducts[0];
    expect(firstProduct).toHaveProperty('colors');
    expect(firstProduct.colors).toEqual([]);
    expect(firstProduct).toHaveProperty('featuredImage');
    expect(firstProduct.featuredImage).toBe('');
  });
});

describe('filterProducts', () => {
  it('should correctly filter products', () => {
    const rawData = products;

    const filteredProducts = filterProducts(rawData, 'unique');

    expect(filteredProducts.length).toBe(1);
    expect(filteredProducts[0].title).toBe('This unique product for testing');
  });
});

describe('sortProducts', () => {
  it('should correctly sort products in ascending order', () => {
    const products = [
      { title: 'Product B', price: 200 },
      { title: 'Product A', price: 100 },
      { title: 'Product C', price: 300 },
    ];

    const sortedProducts = sortProducts(products, 'priceAsc');

    expect(sortedProducts[0].title).toBe('Product A');
    expect(sortedProducts[1].title).toBe('Product B');
    expect(sortedProducts[2].title).toBe('Product C');
  });

  it('should correctly sort products in descending order', () => {
    const products = [
      { title: 'Product B', price: 200 },
      { title: 'Product A', price: 100 },
      { title: 'Product C', price: 300 },
    ];

    const sortedProducts = sortProducts(products, 'priceDesc');

    expect(sortedProducts[0].title).toBe('Product C');
    expect(sortedProducts[1].title).toBe('Product B');
    expect(sortedProducts[2].title).toBe('Product A');
  });

  it('should return the same order when the sort order is not valid or empty', () => {
    const products = [
      { title: 'Product B', price: 200 },
      { title: 'Product A', price: 100 },
      { title: 'Product C', price: 300 },
    ];

    const sortedProducts = sortProducts(products, null);

    expect(sortedProducts[0].title).toBe('Product B');
    expect(sortedProducts[1].title).toBe('Product A');
    expect(sortedProducts[2].title).toBe('Product C');
  });
});

describe('searchProducts', () => {
  it('should return filtered and sorted', async () => {
    const queryParams = new URLSearchParams();
    queryParams.set('query', 'testing');
    queryParams.set('sort', 'priceDesc');

    const products = await searchProducts(queryParams);

    expect(products.length).toBe(2);
    expect(products[0].title).toBe('This product for testing with higher price');
  });
});
