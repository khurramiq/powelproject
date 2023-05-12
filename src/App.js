import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Home from './pages/home';
// import { ColorModeSwitcher } from './ColorModeSwitcher';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Home />
    </ChakraProvider>
  );
}

export default App;
