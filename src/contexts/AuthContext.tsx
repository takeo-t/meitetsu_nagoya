import React, { createContext, useState } from 'react';

interface AuthContextProps {
    accessToken: string | null;
    client: string | null;
    uid: string | null;
    userEmail: string | null;
    userId: number | null;
    setAuthData: (accessToken: string, client: string, uid: string, userId: number) => void;
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

export const AuthProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    const [accessToken, setAccessToken] = useState<string | null>(null);
    const [client, setClient] = useState<string | null>(null);
    const [uid, setUid] = useState<string | null>(null);
    const [userEmail, setUserEmail] = useState<string | null>(null);
    const [userId, setUserId] = useState<number | null>(null);

    const setAuthData = (accessToken: string, client: string, uid: string, userId: number) => {
    setAccessToken(accessToken);
    setClient(client);
    setUid(uid);
    setUserEmail(userEmail);
    setUserId(userId);
    };

    const clearAuthData = () => {
        setAccessToken(null);
        setClient(null);
        setUid(null);
        setUserEmail(null);
        setUserId(null);
    };

    return (
        <AuthContext.Provider value={{ accessToken, client, uid, userEmail, userId, setAuthData, clearAuthData }}>
            {children}
        </AuthContext.Provider>
    );
};