import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";


interface ApiResponse {
    data: {
        id: number;
        email: string;
    }
}

const useAuth = () => {
    const { accessToken, client, uid, userId, setAuthData, clearAuthData } = useContext(AuthContext);

    const login = async (email: string, password: string) => {
        const response = await fetch('http://localhost:3000/auth/sign_in', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password
            }),
            credentials: 'include',
        });

        if (response.ok) {
            const data = await response.json() as ApiResponse;
            console.log('Response Headers:', Array.from(response.headers.entries()));
            const accessToken = response.headers.get('access-token') || '';
            const client = response.headers.get('client') || '';
            const uid = response.headers.get('uid') || '';
            const userId = data.data.id;

            setAuthData(accessToken, client, uid, data.data.email, userId);
            console.log('After setAuthData - accessToken:', accessToken, ', client:', client, ', uid:', uid);

            return true;
        } else {
            clearAuthData();
            return false;
        }
    };

    const logout = async () => {
        const response = await fetch('http://localhost:3000/auth/sign_out',{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'access-token': accessToken || '',
                'client': client || '',
                'uid': uid || '',
            },
            credentials: 'include',
        });

        if (response.ok) {
            clearAuthData();
            return true;
        } else {
            return false;
        }
    };

    return { login, logout, userId, accessToken, client, uid };
};

export default useAuth;