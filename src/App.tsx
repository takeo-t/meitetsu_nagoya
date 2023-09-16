import { ChakraProvider } from '@chakra-ui/react';

import theme from './theme/theme';
import { Router } from './router/Router';
import { AuthProvider } from './contexts/AuthContext';
import { FavoriteProvider } from './contexts/FavoriteContext';

function App() {
  return (
    <AuthProvider>
      <FavoriteProvider>
     <ChakraProvider theme={theme}>
       <Router />
     </ChakraProvider>
     </FavoriteProvider>
    </AuthProvider>
  );
};


export default App;