import { ChakraProvider } from '@chakra-ui/react';

import theme from './theme/theme';
import { Router } from './router/Router';
import { AuthProvider } from './components/provider/AuthProvider';
import { FavoriteProvider } from './contexts/FavoriteContext';
// import { LogoutProvider } from './contexts/LogoutContext';

function App() {
  return (
    <AuthProvider>
     {/* <LogoutProvider> */}
      <FavoriteProvider>
     <ChakraProvider theme={theme}>
       <Router />
     </ChakraProvider>
     </FavoriteProvider>
     {/* </LogoutProvider> */}
    </AuthProvider>
  );
};


export default App;