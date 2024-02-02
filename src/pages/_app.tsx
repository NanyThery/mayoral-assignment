import type { AppProps } from 'next/app';
import '../styles/global.css';
import Layout from '../components/UI/Layout/Layout';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>NT - Mayoral Assigment</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
