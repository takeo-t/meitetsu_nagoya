import { memo, FC, useCallback, useContext } from 'react';
import { Box, Flex, Heading, Link, useDisclosure } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { MenuIconButton } from '../../atoms/button/MenuIconButton';
import { MenuDrawer } from '../../molecules/MenuDrawer';
import { AuthContext } from '../../../contexts/AuthContext';
import { LogOutButton } from '../../atoms/button/LogOutButton';


export const Header: FC = memo(() => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const navigate = useNavigate();

    const onClickHome = useCallback(() => navigate('/'),[navigate]);
    const onClickFavorite = useCallback(() => navigate('/favorite'),[navigate]);
    const onClickSetting = useCallback(() => navigate('/setting'),[navigate]);
    const onClickLogin = useCallback(() => navigate('/login'),[navigate]);
    const onClickRegister = useCallback(() => navigate('/register'),[navigate]);

    const { userEmail } = useContext(AuthContext);
    console.log(userEmail);


    return (
        <>
        <Flex
        as="nav"
        bg="teal.100"
        color="gray.800"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5}}
        >
        <Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer" }} onClick={onClickHome}>
            <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
                乗車位置チェッカーof名鉄名古屋駅
            </Heading>
        </Flex>
        <Flex
         align="center"
         fontSize="sm"
         flexGrow={2}
         display={{ base: "none", md: "flex" }}></Flex>
        {userEmail ? (
        // ログインしている場合
        <>
            <Box>ようこそ！{userEmail}様</Box>
            <LogOutButton />
            <Link mr={4} onClick={onClickFavorite}>乗車位置メモ</Link>
            <Link mr={4} onClick={onClickSetting}>設定</Link>
        </>
        ) : (
        // ログインしていない場合
        <>
            <Link mr={4} onClick={onClickLogin}>ログイン</Link>
            <Link mr={4} onClick={onClickRegister}>新規登録</Link>
        </>
        )}
        </Flex>
        {/* <Flex
        align="center"
        fontSize="sm"
        flexGrow={2}
        display={{ base: "none", md: "flex" }}>
            <Link mr={4} onClick={onClickFavorite}>よく降りる駅</Link>
            <Link mr={4} onClick={onClickSetting}>設定</Link>
            <Link mr={4} onClick={onClickLogin}>ログイン</Link>
            <Link mr={4} onClick={onClickRegister}>新規登録</Link>
            <LogOutButton />
        </Flex> */}
        <MenuIconButton onOpen={onOpen}/>
        {/* </Flex> */}
        <MenuDrawer
        onClickLogin={onClickLogin}
        onClickRegister={onClickRegister}
        onClickHome={onClickHome}
        onClickFavorite={onClickFavorite}
        onClickSetting={onClickSetting}
        onClose={onClose}
        isOpen={isOpen} />
        </>
    );
});