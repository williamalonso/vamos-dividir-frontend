import Head from 'next/head';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Vamos Dividir</title>
        <meta name="description" content="Aplicativo web criado para organizar despesas financeiras" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;