import { useState } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Box } from "@chakra-ui/react";



export const ModalComponent: React.FC = () => {
    const [isOpen, setIsOpen] = useState(true);
const onClose = () => setIsOpen(false);
return (
    <>
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader color="red.500">乗車位置チェッカーof名鉄名古屋駅にようこそ！</ModalHeader>
                <ModalCloseButton />
                <ModalBody color="red.500">
                    <Box>⚠️注意事項<br />
                    ・本アプリケーションは名鉄線内の駅のみ検索可能です。（ただし名鉄瀬戸線（栄町〜尾張瀬戸）は非対応です。)
                    </Box>
                </ModalBody>
            </ModalContent>
        </Modal>
    </>
);
}
