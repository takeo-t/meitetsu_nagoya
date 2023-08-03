import { useState, useContext } from "react";
import { memo, FC, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import useAuth from "../../hooks/useAuth";
import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { AuthContext } from "../../contexts/AuthContext";



export const Login: FC = memo(() => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login, logout, accessToken, client, uid } = useAuth();
    const { setAuthData } = useContext(AuthContext);
    const navigate = useNavigate();


    const handleLogin = async (event: React.FormEvent) => {
        event.preventDefault();
        const response = await login(email, password);
        console.log('Login result: ', response);
    
        if (response) {
            const accessToken = response.headers.get('access-token');
            const client = response.headers.get('client');
            const uid = response.headers.get('uid');
            const data = await response.json();
            const userEmail = data.data.email;
            const userId = data.data.id;
    
            if (accessToken && client && uid) {
                setAuthData(accessToken, client, uid, userEmail, userId);
                navigate('/');
            }
        }
    }

    const handleLogout = async () => {
        const result = await logout();
        console.log('Logout result: ', result);
    };


    useEffect(() => {
        console.log('accessToken: ', accessToken);
        console.log('client: ', client);
        console.log('uid: ', uid);
    }, [accessToken, client, uid]);

  return (
    <Box as="form" p={5} shadow="md" borderWidth="1px" onSubmit={handleLogin}>
      <FormControl id="email" isRequired>
        <FormLabel>Email address</FormLabel>
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </FormControl>

      <FormControl id="password" isRequired mt={6}>
        <FormLabel>Password</FormLabel>
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </FormControl>

      <Button colorScheme="blue" type="submit" width="full" mt={4}>
        Sign In
      </Button>
      <Button colorScheme="red" width="full" mt={4} onClick={handleLogout}>
        Log Out
      </Button>
    </Box>
  );
}
);