import { ChakraProvider } from '@chakra-ui/react';

import theme from './theme/theme';
import { Router } from './router/Router';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
     <ChakraProvider theme={theme}>
       <Router />
     </ChakraProvider>
    </AuthProvider>
  );
};


export default App;