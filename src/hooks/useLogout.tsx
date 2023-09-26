import { FC } from 'react';
import { useLogout } from '../contexts/LogoutContext';

export const Header: FC = ({ children }) => {
  const { handleLogout } = useLogout();

  return (
    <Header>
      <button onClick={handleLogout}>Logout</button>
    </Header>
  );
};
