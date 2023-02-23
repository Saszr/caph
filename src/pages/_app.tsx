import { Fragment } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { ChakraProvider } from '@/contexts';
import {
  WagmiConfigProvider,
  DefaultWeb3Modal,
} from '@/contexts/WalletConnectProvider';

export default function App({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const Layout = Component.layout ?? Fragment;

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>
      <ChakraProvider>
        <WagmiConfigProvider>
          <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
        </WagmiConfigProvider>
        <DefaultWeb3Modal />
      </ChakraProvider>
    </>
  );
}
