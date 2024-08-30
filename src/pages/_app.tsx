import Head from 'next/head';
import '@/styles/globals.css';
import store from '@/redux/store';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import LayoutComponent from '@/components/Layout/LayoutComponent';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Head>
        <title>Vamos Dividir</title>
        <meta name="description" content="Aplicativo web criado para organizar despesas financeiras" />
      </Head>
      <LayoutComponent>
        <Component {...pageProps} />
      </LayoutComponent>
    </Provider>
  );
};

export default MyApp;