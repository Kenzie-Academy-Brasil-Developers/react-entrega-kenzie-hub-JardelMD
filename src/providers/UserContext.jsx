import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const navigate = useNavigate()
    // Estado de usuário:
    const [user, setUser] = useState(null)

      //Efeito de montagem para deixar o usuário persistente na página (Realizar uma requisição para trazer o usuário de volta)
   useEffect(() => {
    const loadUser = async () => {
       const token = localStorage.getItem("@TOKEN");
  

       //Tentativa de requisição, caso o usuário exista e tenha um identificador
       if (token) {
          try {
             const { data } = await api.get("/profile", {
                headers: {
                   Authorization: `Bearer ${token}`,
                },
             });
             setUser(data);//Realimentar o estado
             navigate("/dashboard");//Navegar para a dashboard
          } catch (error) {//Se a requisição não der certo, limpa as chaves do localStorage para evitar possíveis conflitos
             toast.error(error);
             localStorage.removeItem("@TOKEN");
          }
       }
    };
    loadUser();
 }, []); 
    
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
    const userLogout = () => {
        setUser(null);
        localStorage.removeItem("@TOKEN");
        navigate("/")
    }

   
    return (
        <UserContext.Provider value={{user, setUser, userRegister, userLogin, userLogout }}>
            {children}
        </UserContext.Provider>
    )
}