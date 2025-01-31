import { memo, FC, useCallback, useContext } from 'react';
import { Flex, Heading, useDisclosure } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from '../../../contexts/AuthContext';


export const Header: FC = memo(() => {
    useDisclosure();
    const navigate = useNavigate();

    const onClickHome = useCallback(() => navigate('/'),[navigate]);

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
        </Flex>
        </>
        );
    });
