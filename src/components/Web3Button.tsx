import { useEffect, useState } from 'react';
import { Button, Box, useColorMode } from '@chakra-ui/react';
import { useWeb3Modal, useWeb3ModalTheme } from '@web3modal/react';
import { useAccount } from 'wagmi';

const Web3Button = () => {
  const account = useAccount();
  const { open } = useWeb3Modal();
  const { colorMode } = useColorMode();
  const { setTheme } = useWeb3ModalTheme();

  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    setTheme({
      themeMode: colorMode,
    });
  }, [colorMode, setTheme]);

  useEffect(() => {
    setIsConnected(account.isConnected);
  }, [account.isConnected]);

  return (
    <Box>
      {isConnected ? (
        <Button
          variant="outline"
          onClick={() => open()}
          color="gray.500"
          borderRadius="lg"
        >
          {account.address &&
            `${account.address.slice(0, 6)}...${account.address.slice(-4)}`}
        </Button>
      ) : (
        <Button
          variant="outline"
          onClick={() => open()}
          color="gray.500"
          borderRadius="lg"
        >
          Connect
        </Button>
      )}
    </Box>
  );
};

export default Web3Button;
