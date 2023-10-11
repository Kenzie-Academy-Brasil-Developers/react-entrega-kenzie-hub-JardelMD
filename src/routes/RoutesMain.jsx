import { Route, Routes } from "react-router-dom";
import { DashboardPage } from "../pages/DashboardPage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { useState } from "react";

export const RoutesMain = ({toast}) => {
    //Estado de usuário
    const [user, setUser] = useState(null);
    return (
        //Routes é usado para envolver todas as rotas existentes na aplicação  
        <Routes>
            <Route path="/" element={<LoginPage setUser={setUser}/>} />
            <Route path="/register" element={<RegisterPage toast={toast}/>} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/*" element={<NotFoundPage/>} />
        </Routes>
    );
};