import { BrowserRouter, Routes, Route  } from "react-router-dom";
import { memo, FC } from "react";

import { Login } from "../components/pages/Login";
import { Register } from "../components/pages/Register";
import { Home } from "../components/pages/Home";
import { Page404 } from "../components/pages/Page404";
import { HeaderLayout } from "../components/templates/HeaderLayout";
import { Favorite } from "../components/pages/Favorite";
import { Setting } from "../components/pages/Setting";
import { PrivateRoute } from "./PrivateRoute";



export const Router: FC = memo(() => {
  return (
    <BrowserRouter>
      <HeaderLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Favorite" element={<PrivateRoute><Favorite/></PrivateRoute>} />
          <Route path="/Setting" element={<PrivateRoute><Setting /></PrivateRoute>} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </HeaderLayout>
    </BrowserRouter>
  );
});