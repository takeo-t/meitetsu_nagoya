import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

// interface ApiResponse {
//     data: {
//         id: number;
//         email: string;
//     }
// }

const useAuth = () => {
    const { accessToken, client, uid, userId, clearAuthData } = useContext(AuthContext);

    const login = async (email: string, password: string): Promise<Response | null> => {
        try {
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

            if (!response.ok) {
                const text = await response.text();
                throw new Error(`HTTP error! status: ${response.status}, message: ${text}`);
            }

            return response;
        } catch (error) {
            console.log('Fetch error:', error);
            clearAuthData();
            return null;
        }
    };


    const logout = async () => {
        try {
            const response = await fetch('http://localhost:3000/auth/sign_out',{
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Token': accessToken || '',
                    'Client': client || '',
                    'Uid': uid || '',
                },
                credentials: 'include',
            });

            if (!response.ok) {
                const text = await response.text();
                throw new Error(`HTTP error! status: ${response.status}, message: ${text}`);
            }

            clearAuthData();
            return true;
        } catch (error) {
            console.log('Fetch error:', error);
            return false;
        }
    };

    return { login, logout, userId, accessToken, client, uid };
};

export default useAuth;
