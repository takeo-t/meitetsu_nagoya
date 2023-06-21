import { ChakraProvider } from '@chakra-ui/react';

import theme from './theme/theme';
import { Router } from './router/Router';

function App() {
  return (
    <ChakraProvider theme={theme}>
       <Router />
    </ChakraProvider>
  );
};


export default App;