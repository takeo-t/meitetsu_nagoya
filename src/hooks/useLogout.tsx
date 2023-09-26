import React from 'react';
import { useLogout } from '../contexts/LogoutContext';

const Header: React.FC = () => {
  const { handleLogout } = useLogout();

  return (
    <header>
      <button onClick={handleLogout}>Logout</button>
    </header>
  );
};

export default Header;
