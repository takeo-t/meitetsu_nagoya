import { FC, ReactNode } from "react";
import { LogoutContext } from "../../contexts/LogoutContext";
import { useAuth } from "../../hooks/useAuth";

interface LogoutProviderProps {
    children: ReactNode;
}

export const LogoutProvider: FC<LogoutProviderProps> = ({ children }) => {
    const { logout } = useAuth();
  
    const handleLogout = async () => {
      const result = await logout();
      console.log('Logout result: ', result);
    };
  
    return (
      <LogoutContext.Provider value={{ handleLogout }}>
        { children }
      </LogoutContext.Provider>
    );
  };