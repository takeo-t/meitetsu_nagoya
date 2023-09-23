import { FC } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
    handleLogout: () => void;
};

export const LogOutButton: FC<Props> = ({handleLogout}) => {
return (
    <Button colorScheme="red" width="full" mt={4} onClick={handleLogout}>ログアウト</Button>
)
}