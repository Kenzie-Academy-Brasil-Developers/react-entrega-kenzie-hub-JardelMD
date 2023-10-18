import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { api } from "../services/api"
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const UserContext = createContext({})

export const UserProvider = ({ children }) => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("@TOKEN")
      if (token) {
        try {
          const { data } = await api.get("/profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          setUser(data)
          navigate("/dashboard")
        } catch (error) {
          console.log(error)
          localStorage.removeItem("@TOKEN")
        }
      }
    }
    loadUser()
  }, [])

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

  const userLogout = () => {
    setUser(null)
    localStorage.removeItem("@TOKEN")
    navigate("/")
  }

  return (
    <UserContext.Provider value={{ user, setUser, userRegister, userLogin, userLogout }}>
      {children}
    </UserContext.Provider>
  )
}