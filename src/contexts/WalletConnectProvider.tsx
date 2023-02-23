import { WagmiConfig, createClient, configureChains } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { mainnet, bsc } from 'wagmi/chains';
import { EthereumClient, modalConnectors } from '@web3modal/ethereum';
import { Web3Modal } from '@web3modal/react';

interface WagmiConfigProviderProps {
  children: React.ReactNode;
}

// Get projectID at https://cloud.walletconnect.com
if (!process.env.NEXT_PUBLIC_PROJECT_ID)
  throw new Error('You need to provide NEXT_PUBLIC_PROJECT_ID env variable');

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

const { provider, chains } = configureChains(
  [mainnet, bsc],
  [publicProvider()],
);

const connectors = modalConnectors({
  projectId,
  appName: 'Caph',
  version: '1',
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export const ethereumClient = new EthereumClient(wagmiClient, chains);

export const DefaultWeb3Modal = () => {
  return <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />;
};

export const WagmiConfigProvider = ({ children }: WagmiConfigProviderProps) => {
  return <WagmiConfig client={wagmiClient}>{children}</WagmiConfig>;
};
