import Header from 'components/Header/Header';
import { ProductGrid } from 'components/ProductGrid/ProductGrid';
import SearchBar from 'components/SearchBar/SearchBar';
import ZoomButtons from 'components/ZoomButtons/ZoomButtons';
import { NextPage } from 'next';
import { useState } from 'react';
import { Clothes } from 'types/clothes.interface';

//TODO move this to a config file
const CLOTHES_URL = 'https://run.mocky.io/v3/b4d26680-f43c-40f1-b54c-14668f104f60';
// empty array: https://run.mocky.io/v3/a79c1856-7cd8-4ba3-884d-b0657b63ba76
// clothes: 'https://run.mocky.io/v3/b4d26680-f43c-40f1-b54c-14668f104f60'

interface HomeProps {
  data: Clothes[];
}

const HomePage: NextPage<HomeProps> = ({ data = [] }) => {
  const [zoomIn, setZoomIn] = useState(true);

  function handleSearch(value: string) {
    console.log('searching', value);
  }
  return (
    <div>
      <Header>
        <SearchBar onSearch={(value: string) => handleSearch(value)} />
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
      {data.length > 0 ? <ProductGrid products={data} zoomIn={zoomIn} /> : 'no hay elementos'}{' '}
    </div>
  );
};

export default HomePage;

export const getStaticProps = async () => {
  try {
    const res = await fetch(CLOTHES_URL);
    const data = (await res.json()) as Clothes[];

    return { props: { data } };
  } catch (e) {
    return { props: { data: [] } };
  }
};
