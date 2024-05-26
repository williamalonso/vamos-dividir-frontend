// pages/_document.tsx

import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
  
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          {/* Você pode adicionar tags de meta, links ou scripts adicionais aqui */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
