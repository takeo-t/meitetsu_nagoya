import { FC } from 'react';
import { useLogout } from '../contexts/LogoutContext';

export const Header: FC = () => {
  const { handleLogout } = useLogout();

  return (
    <header>
      <button onClick={handleLogout}>Logout</button>
    </header>
  );
};
