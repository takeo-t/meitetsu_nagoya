import { memo, FC, ReactNode } from "react";

import { Header } from "../organisms/layout/Header";

type Props = {
    children: ReactNode;
}

export const HeaderLayout: FC<Props> = memo((props) => {
    const { children } = props;
    return (
        <>
        <Header />
        { children }
        </>
    )
})