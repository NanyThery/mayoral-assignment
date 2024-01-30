import type { AppProps } from 'next/app';
import '../styles/global.css';
import Layout from 'components/Layout/Layout';

// TODO Add layout component for centering and responsive
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
