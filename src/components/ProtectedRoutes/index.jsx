import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../../providers/UserContext";

//Proteção de rotas
export const ProtectedRoutes = () => {
    const { user } = useContext(UserContext);
 
    //Se o usuário existir, renderiza a rota filho. Caso contrário, redireciona para a página inicial
    return user ? <Outlet /> : <Navigate to="/" />
}