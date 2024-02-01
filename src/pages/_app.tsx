import type { AppProps } from 'next/app';
import '../styles/global.css';
import Layout from '../components/UI/Layout/Layout';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
