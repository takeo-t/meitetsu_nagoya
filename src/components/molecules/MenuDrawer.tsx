import { memo, FC } from "react";
import { Drawer, DrawerOverlay, DrawerBody, DrawerContent, Button } from "@chakra-ui/react";

type Props = {
    onClose: () => void;
    isOpen: boolean;
    onClickHome: () => void;
    onClickFavorite: () => void;
    onClickSetting: () => void;
}

export const MenuDrawer: FC<Props> = memo((props) => {
    const { onClose, isOpen, onClickHome, onClickFavorite, onClickSetting } = props;
    return (
        <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen} >
            <DrawerOverlay>
                <DrawerContent>
                <DrawerBody p={0} bg="gray.100">
                    <Button w="100%" onClick={() => {onClickHome(); onClose();}}>TOP</Button>
                    <Button w="100%" onClick={() => {onClickFavorite(); onClose();}}>よく降りる駅</Button>
                    <Button w="100%" onClick={() => {onClickSetting(); onClose();}}>設定</Button>
                </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    )
});