import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Container,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { AppContextProvider } from './AppContext';
import FirstPage from './components/FirstPage';

function App() {
  // <ColorModeSwitcher justifySelf="flex-end" />
  return (
    <ChakraProvider theme={theme}>
      <AppContextProvider>
        <Container>
          <FirstPage />
        </Container>
      </AppContextProvider>
    </ChakraProvider>
  );
}

export default App;
