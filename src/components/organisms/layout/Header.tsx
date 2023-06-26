import { memo, FC, useCallback } from 'react';
import { Flex, Heading, Link, useDisclosure } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { MenuIconButton } from '../../atoms/button/MenuIconButton';
import { MenuDrawer } from '../../molecules/MenuDrawer';


export const Header: FC = memo(() => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const navigate = useNavigate();

    const onClickHome = useCallback(() => navigate('/'),[navigate]);
    const onClickSetting = useCallback(() => navigate('/setting'),[navigate]);

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
                乗車位置検索of名鉄名古屋駅
            </Heading>
        </Flex>
        <Flex
        align="center"
        fontSize="sm"
        flexGrow={2}
        display={{ base: "none", md: "flex" }}>
            <Link onClick={onClickSetting}>設定</Link>
        </Flex>
        <MenuIconButton onOpen={onOpen}/>
        </Flex>
        <MenuDrawer onClickHome={onClickHome} onClickSetting={onClickSetting} onClose={onClose} isOpen={isOpen} />
        </>
    );
});