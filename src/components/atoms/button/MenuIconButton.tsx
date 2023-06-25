import { memo, FC } from "react";
import { IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

type Props = {
    onOpen: () => void;
}

export const MenuIconButton: FC<Props> = memo((props) => {
    const { onOpen } = props;
    return (
        <IconButton
        aria-label="メニューボタン"
        icon={<HamburgerIcon />}
        size="sm"
        variant="unstyled"
        display={{ base: "block", md: "none" }}
        onClick={onOpen}
        />
    )
});

export{}