import { BrowserRouter, Routes, Route  } from "react-router-dom";
import { memo, FC } from "react";

import { Login } from "../components/pages/Login";
import { Home } from "../components/pages/Home";
import { Page404 } from "../components/pages/Page404";
import { HeaderLayout } from "../components/templates/HeaderLayout";


export const Router: FC = memo(() => {
    return (
        <BrowserRouter>
          <HeaderLayout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Login" element={<Login />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
          </HeaderLayout>
        </BrowserRouter>
    )
})

export{}