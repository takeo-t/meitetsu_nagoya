import { useState, useEffect, ReactNode, FC } from 'react';

import { AuthContext } from '../../contexts/AuthContext';

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {

    const [accessToken, setAccessToken] = useState<string | null>(localStorage.getItem('AccessToken'));
    const [client, setClient] = useState<string | null>(localStorage.getItem('Client'));
    const [uid, setUid] = useState<string | null>(localStorage.getItem('Uid'));
    const [userEmail, setUserEmail] = useState<string | null>(localStorage.getItem('userEmail'));
    const [userId, setUserId] = useState<number | null>(localStorage.getItem('userId') ? Number(localStorage.getItem('userId')) : null);

    const setAuthData = (accessToken: string, client: string, uid: string, userEmail: string, userId: number | null) => {
        console.log('Setting auth data:', { accessToken, client, uid, userEmail, userId });
        setAccessToken(accessToken);
        setClient(client);
        setUid(uid);
        setUserEmail(userEmail);
        setUserId(userId);
    };
    
    useEffect(() => {
        localStorage.setItem('AccessToken', accessToken || '');
        localStorage.setItem('Client', client || '');
        localStorage.setItem('Uid', uid || '');
        localStorage.setItem('userEmail', userEmail || '');
        localStorage.setItem('userId', userId?.toString() || '');
    }, [accessToken, client, uid, userEmail, userId]);
    

    const clearAuthData = () => {
        setAccessToken(null);
        setClient(null);
        setUid(null);
        setUserEmail(null);
        setUserId(null);

        localStorage.removeItem('AccessToken');
        localStorage.removeItem('Client');
        localStorage.removeItem('Uid');
        localStorage.removeItem('userEmail');
        localStorage.removeItem('userId');
    };

    return (
        <AuthContext.Provider value={{ accessToken, client, uid, userEmail, userId, setAuthData, clearAuthData }}>
            {children}
        </AuthContext.Provider>
    );
};
