import { Route, Routes } from "react-router-dom";
import { DashboardPage } from "../pages/DashboardPage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { NotFoundPage } from "../pages/NotFoundPage";

export const RoutesMain = () => {
    //Estado de usuário
    // const [isLogin, setIsLogin] = useState(false)
    return (
        //Routes é usado para envolver todas as rotas existentes na aplicação  
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/404" element={<NotFoundPage/>} />
        </Routes>
    );
};