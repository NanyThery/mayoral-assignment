import Header from '../components/Header/Header';
import { ProductGrid } from '../components/ProductGrid/ProductGrid';
import SearchBar from '../components/SearchBar/SearchBar';
import ZoomButtons from '../components/ZoomButtons/ZoomButtons';
import { fetchAllProducts, searchProducts } from '../utils/products';
import { NextPage } from 'next';
import { useState } from 'react';
import { Clothes } from '../types/clothes.interface';
import Filters from '../components/Filters/Filters';

interface HomeProps {
  products: Clothes[];
}

const HomePage: NextPage<HomeProps> = ({ products = [] }) => {
  const [zoomIn, setZoomIn] = useState(true);

  return (
    <div>
      <Header>
        <SearchBar />
        <ZoomButtons
          onZoomIn={() => {
            !zoomIn && setZoomIn(true);
          }}
          onZoomOut={() => {
            zoomIn && setZoomIn(false);
          }}
          isZoomEnabled={zoomIn}
        />
      </Header>
      <Filters />
      {products.length > 0 ? (
        <ProductGrid products={products} zoomIn={zoomIn} />
      ) : (
        'no hay elementos'
      )}{' '}
    </div>
  );
};

export default HomePage;

export const getServerSideProps = async (context) => {
  const searchParams = new URLSearchParams(context.query);

  if (searchParams) {
    try {
      const products = await searchProducts(searchParams);
      return { props: { products } };
    } catch (e) {
      return { props: { products: [] } };
    }
  }
  try {
    const products = await fetchAllProducts();
    return { props: { products } };
  } catch (e) {
    return { props: { products: [] } };
  }
};
