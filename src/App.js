import React, { useRef } from 'react';
import {
  ChakraProvider,
  Flex,
  useDisclosure
} from '@chakra-ui/react';
import theme from './theme';
import { AppContextProvider } from './AppContext';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import MenuPage from './components/MenuPage';
import { HashRouter, Routes, Route } from 'react-router-dom';
import ShoppingCart from './components/ShoppingCart';

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <ChakraProvider theme={theme}>
      <AppContextProvider>
        <HashRouter>
          <Flex>
            <Navbar onOpen={onOpen} btnRef={btnRef} />
            <ShoppingCart isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/menu" element={<MenuPage onOpen={onOpen} btnRef={btnRef} />} />
            </Routes>
          </Flex>
        </HashRouter>
      </AppContextProvider>
    </ChakraProvider>
  );
}

export default App;
