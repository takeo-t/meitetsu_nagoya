import { memo, FC } from 'react';
import { Flex, Heading, Link, IconButton, Drawer, DrawerOverlay, DrawerBody, Button, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon } from '@chakra-ui/icons';



export const Header: FC = memo(() => {
    const { isOpen, onOpen, onClose } = useDisclosure();
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
        <Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer" }}>
            <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
                乗車位置検索of名鉄名古屋駅
            </Heading>
        </Flex>
        <Flex
        align="center"
        fontSize="sm"
        flexGrow={2}
        display={{ base: "none", md: "flex" }}>
            <Link>設定</Link>
        </Flex>
        <IconButton
        aria-label="メニューボタン"
        icon={<HamburgerIcon />}
        size="sm"
        variant="unstyled"
        display={{ base: "block", md: "none" }}
        onClick={onOpen}
        />
        </Flex>
        <Drawer
        placement="left"
        size="xs"
        onClose={onClose}
        isOpen={isOpen}
        >
            <DrawerOverlay>
                <DrawerBody p={0} bg="gray.100">
                    <Button w="100%">設定</Button>
                </DrawerBody>
            </DrawerOverlay>
        </Drawer>
        </>
    );
});