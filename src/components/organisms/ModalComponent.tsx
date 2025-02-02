import { useState } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, ModalFooter, Button, Text } from "@chakra-ui/react";



export const ModalComponent: React.FC = () => {
    const [isOpen, setIsOpen] = useState(true);
    
const onClose = () => setIsOpen(false);
return (
    <>
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay
             bg='blackAlpha.300'
             backdropFilter='blur(10px) hue-rotate(90deg)'
            />
            <ModalContent>
                <ModalHeader color="red.500">乗車位置チェッカーof名鉄名古屋駅にようこそ！</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Text color="blackAlpha.900">
                    ・降りる駅を入力し、画面に表示された同じ色の乗車位置に並んでください。
                    </Text>
                    <Text color="blackAlpha.900">
                    ・本アプリケーションは名鉄線内の駅のみ検索可能です。（ただし名鉄瀬戸線（栄町〜尾張瀬戸）は非対応です。)
                    </Text>
                </ModalBody>
                <ModalFooter>
            <Button onClick={onClose}>閉じる</Button>
          </ModalFooter>
            </ModalContent>
        </Modal>
    </>
);
}
