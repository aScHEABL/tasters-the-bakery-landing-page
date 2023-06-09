import React, { useRef } from 'react';
import {
  ChakraProvider,
  Flex,
} from '@chakra-ui/react';
import theme from './theme';
import { AppContextProvider } from './AppContext';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import { HashRouter, Routes, Route } from 'react-router-dom';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AppContextProvider>
        <HashRouter>
          <Flex>
            <Navbar />
            <ShoppingCart />
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
