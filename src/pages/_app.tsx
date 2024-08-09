import Head from 'next/head';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import LayoutComponent from '@/components/Layout/LayoutComponent';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Vamos Dividir</title>
        <meta name="description" content="Aplicativo web criado para organizar despesas financeiras" />
      </Head>
      <LayoutComponent>
        <Component {...pageProps} />
      </LayoutComponent>
    </>
  );
};

export default MyApp;