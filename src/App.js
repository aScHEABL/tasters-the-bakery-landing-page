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
  Flex,
  Container
} from '@chakra-ui/react';
import theme from './theme';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { AppContextProvider } from './AppContext';
import Navbar from './components/Navbar';
import { motion, useScroll } from "framer-motion"
import HomePage from './components/HomePage';

function App() {

  // <ColorModeSwitcher justifySelf="flex-end" />
  return (
    <ChakraProvider theme={theme}>
      <AppContextProvider>
        <Flex>
          <Navbar />
          <HomePage />
        </Flex>
      </AppContextProvider>
    </ChakraProvider>
  );
}

export default App;
