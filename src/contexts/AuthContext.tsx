import React, { createContext, useState, useEffect } from 'react';

interface AuthContextProps {
    accessToken: string | null;
    client: string | null;
    uid: string | null;
    userEmail: string | null;
    userId: number | null;
    setAuthData: (accessToken: string, client: string, uid: string, userEmail: string, userId: number) => void;
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
    // const [accessToken, setAccessToken] = useState<string | null>(null);
    // const [client, setClient] = useState<string | null>(null);
    // const [uid, setUid] = useState<string | null>(null);
    // const [userEmail, setUserEmail] = useState<string | null>(null);
    // const [userId, setUserId] = useState<number | null>(null);

    const [accessToken, setAccessToken] = useState<string | null>(localStorage.getItem('accessToken'));
    const [client, setClient] = useState<string | null>(localStorage.getItem('client'));
    const [uid, setUid] = useState<string | null>(localStorage.getItem('uid'));
    const [userEmail, setUserEmail] = useState<string | null>(localStorage.getItem('userEmail'));
    const [userId, setUserId] = useState<number | null>(localStorage.getItem('userId') ? Number(localStorage.getItem('userId')) : null);

    const setAuthData = (accessToken: string, client: string, uid: string, userEmail: string, userId: number) => {
    setAccessToken(accessToken);
    setClient(client);
    setUid(uid);
    setUserEmail(userEmail);
    setUserId(userId);
    };

    useEffect(() => {
        if(accessToken) localStorage.setItem('accessToken', accessToken);
        if(client) localStorage.setItem('client', client);
        if(uid) localStorage.setItem('uid', uid);
        if(userEmail) localStorage.setItem('userEmail', userEmail);
        if(userId) localStorage.setItem('userId', userId.toString());
    }, [accessToken, client, uid, userEmail, userId]);


    const clearAuthData = () => {
        setAccessToken(null);
        setClient(null);
        setUid(null);
        setUserEmail(null);
        setUserId(null);

        localStorage.removeItem('accessToken');
        localStorage.removeItem('client');
        localStorage.removeItem('uid');
        localStorage.removeItem('userEmail');
        localStorage.removeItem('userId');
    };

    return (
        <AuthContext.Provider value={{ accessToken, client, uid, userEmail, userId, setAuthData, clearAuthData }}>
            {children}
        </AuthContext.Provider>
    );
};