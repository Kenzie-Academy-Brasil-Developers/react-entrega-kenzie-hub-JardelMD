import { Route, Routes } from "react-router-dom"
import { DashboardPage } from "../pages/DashboardPage"
import { LoginPage } from "../pages/LoginPage"
import { RegisterPage } from "../pages/RegisterPage"
import { NotFoundPage } from "../pages/NotFoundPage"
import { useState } from "react"

export const RoutesMain = ({ toast }) => {
    const [user, setUser] = useState(null)
    return (
        <Routes>
            <Route path="/" element={<LoginPage toast={toast} setUser={setUser} />} />
            <Route path="/register" element={<RegisterPage toast={toast} />} />
            <Route path="/dashboard" element={<DashboardPage setUser={setUser} user={user} />} />
            <Route path="/*" element={<NotFoundPage />} />
        </Routes>
    )
}