import { ChakraProvider } from '@chakra-ui/react';

import theme from './theme/theme';
import { Router } from './router/Router';

import StationsData from "./StationsData.json";

const stations = StationsData.StationsData;

function App() {
  return (
    <ChakraProvider theme={theme}>
       <Router />
    </ChakraProvider>
  );
};


export default App;