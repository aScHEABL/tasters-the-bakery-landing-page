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
import MenuPage from './components/MenuPage';
import { HashRouter, Routes, Route } from 'react-router-dom';

function App() {

  // <ColorModeSwitcher justifySelf="flex-end" />
  return (
    <ChakraProvider theme={theme}>
      <AppContextProvider>
        <HashRouter>
          <Flex>
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/menu" element={<MenuPage />} />
            </Routes>
          </Flex>
        </HashRouter>
      </AppContextProvider>
    </ChakraProvider>
  );
}

export default App;
