import { FC } from "react";
import { Button } from "@chakra-ui/react";
// import { Login } from "../../pages/Login";

type Props = {
    handleLogout: () => void;
};

export const LogOutButton: FC<Props> = ({handleLogout}) => {
return (
    <Button colorScheme="red" width="full" mt={4} onClick={handleLogout}>ログアウト</Button>
)
}

