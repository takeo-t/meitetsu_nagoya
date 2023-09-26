import React, { createContext, useContext } from 'react';
import { useAuth } from '../hooks/useAuth';

interface LogoutContextProps {
  handleLogout: () => Promise<void>;
}

const LogoutContext = createContext<LogoutContextProps | undefined>(undefined);

export const LogoutProvider: React.FC = () => {
  const { logout } = useAuth();

  const handleLogout = async () => {
    const result = await logout();
    console.log('Logout result: ', result);
  };

  return (
    <LogoutContext.Provider value={{ handleLogout }}>
    </LogoutContext.Provider>
  );
};

export const useLogout = () => {
  const context = useContext(LogoutContext);
  if (!context) {
    throw new Error('useLogout must be used within a LogoutProvider');
  }
  return context;
};
