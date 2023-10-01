import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { useAuth } from "../../../hooks/useAuth";

export const LogOutButton: FC = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        navigate('/login');
    }
return (
    <Button colorScheme="red" mt={4} onClick={handleLogout}>ログアウト</Button>
)
}

