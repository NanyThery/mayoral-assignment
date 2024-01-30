import { NextPage } from 'next';
import { Clothes } from 'types/clothes.interface';

const CLOTHES_URL =
  'https://run.mocky.io/v3/b4d26680-f43c-40f1-b54c-14668f104f60c1856-7cd8-4ba3-884d-b0657b63ba76';
// empty array: https://run.mocky.io/v3/a79c1856-7cd8-4ba3-884d-b0657b63ba76
// clothes: 'https://run.mocky.io/v3/b4d26680-f43c-40f1-b54c-14668f104f60'

const HomePage: NextPage = ({ data }) => {
  return (
    <div>
      {data.length > 0 ? 'hay elementos' : 'no hay elementos'}{' '}
      <p className="small">este mas pequeño</p>
      <p className="xSmall">este mas pequeño aun</p>
    </div>
  );
};

export default HomePage;

//TODO add typescript to this getStaticProps?
export const getStaticProps = async () => {
  try {
    const res = await fetch(CLOTHES_URL);
    const data = (await res.json()) as Clothes[];
    return { props: { data } };
  } catch (e) {
    console.log(e);
    return { props: { data: [] } };
  }
};
