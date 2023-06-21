import { memo, FC } from 'react';
import { Flex, Heading } from "@chakra-ui/react";

export const Header: FC = memo(() => {
    return (
        <Flex as="nav" bg="teal.100" color="gray.100" align="center" justify="space-between">
            <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>乗車位置検索of名鉄名古屋駅</Heading>
        </Flex>
    );
});