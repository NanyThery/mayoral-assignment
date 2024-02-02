import Header from '../components/Header/Header';
import { ProductGrid } from '../components/ProductGrid/ProductGrid';
import SearchBar from '../components/SearchBar/SearchBar';
import ZoomButtons from '../components/ZoomButtons/ZoomButtons';
import { fetchAllProducts, searchProducts } from '../utils/products';
import { GetServerSideProps, NextPage } from 'next';
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
      <ProductGrid products={products} zoomIn={zoomIn} />
    </div>
  );
};

export default HomePage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const searchParams = context.query;

  try {
    const products = searchParams.toString()
      ? await searchProducts(searchParams)
      : await fetchAllProducts();
    return { props: { products } };
  } catch (e) {
    // here we should log the error to an external service but we return an empty array to avoid the app to crash and the user to see a 500 error
    return { props: { products: [] } };
  }
};
