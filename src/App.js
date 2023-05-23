import React from 'react';
import {
  ChakraProvider,
  extendTheme,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Container,
} from '@chakra-ui/react';
import theme from './theme';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { AppContextProvider } from './AppContext';
import FirstPage from './components/FirstPage';

function App() {
  // <ColorModeSwitcher justifySelf="flex-end" />
  return (
    <ChakraProvider theme={theme}>
      <AppContextProvider>
        <Container maxW='container.xl'>
          <FirstPage />
        </Container>
      </AppContextProvider>
    </ChakraProvider>
  );
}

export default App;
