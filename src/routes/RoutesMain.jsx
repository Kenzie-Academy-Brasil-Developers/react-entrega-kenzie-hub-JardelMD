import { Route, Routes } from "react-router-dom"
import { DashboardPage } from "../pages/DashboardPage"
import { LoginPage } from "../pages/LoginPage"
import { RegisterPage } from "../pages/RegisterPage"
import { NotFoundPage } from "../pages/NotFoundPage"
// import { useState } from "react"

export const RoutesMain = () => {
    //Movendo estado de usuário para Context
    // const [user, setUser] = useState(null)
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/*" element={<NotFoundPage />} />
        </Routes>
    )
}