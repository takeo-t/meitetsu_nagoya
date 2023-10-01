import { createContext } from 'react';

interface AuthContextProps {
    accessToken: string | null;
    client: string | null;
    uid: string | null;
    userEmail: string | null;
    userId: number | null;
    setAuthData: (accessToken: string, client: string, uid: string, userEmail: string, userId: number | null) => void;
    clearAuthData: () => void;
}

export const AuthContext = createContext<AuthContextProps>({
    accessToken: null,
    client: null,
    uid: null,
    userEmail: null,
    userId: null,
    setAuthData: () => {},
    clearAuthData: () => {},
});