import { createContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const navigate = useNavigate()
    // Estado de usuário:
    const [user, setUser] = useState(null)
    
    //Função de Cadastro:
    const [loading, setLoading] = useState(false)
    const userRegister = async (formData) => {
        try {
            setLoading(true)
            const { data } = await api.post('/users', formData)
            navigate("/")
            toast.success("Conta criada com sucesso!")
        } catch (error) {
            toast.error("Ops! Algo deu errado")

        } finally {
            setLoading(false)
        }
    }

    //Função de Login:
    const userLogin = async (formData) => {
      try {
        setLoading(true)
        const { data } = await api.post("/sessions", formData)
        setUser(data.user)
        localStorage.setItem("@TOKEN", data.token)
        navigate("/dashboard")
        toast.success(`Bem vindo ${data.user.name}!`)
      } catch (error) {
        toast.error("Email ou senha incorretos. Tente novamente!")
      } finally {
        setLoading(false)
      }
    }

    //Função de Logout:
    const logout = () => {
        setUser("")
        localStorage.clear()
        navigate("/")
    }

   
    return (
        <UserContext.Provider value={{user, setUser, userRegister, userLogin, logout }}>
            {children}
        </UserContext.Provider>
    )
}