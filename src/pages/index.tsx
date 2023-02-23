import Head from 'next/head';
import { Flex } from '@chakra-ui/react';

import { Web3Button } from '@/components';
import { DefaultLayout } from '@/layouts';

const Page = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Oasis Web3 Connect" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        h="70vh"
      >
        <Web3Button />
      </Flex>
    </>
  );
};
Page.layout = DefaultLayout;

export default Page;
