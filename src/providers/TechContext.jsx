// import { useContext, useEffect } from "react"
// import { createContext, useState } from "react"
// import { api } from "../services/api"

export const TechContext = createContext({})

export const TechProvider = ({ children }) => {
   
//    const [techList, setTechList] = useState([])
//    const [editingTech, setEditingTech] = useState(null)

//    console.log(editingTech)

   //Efeito de montagem para listagem de Techs
//    useEffect(() => {
//       const getTechs = async () => {
//          try {
//             const { data } = await api.get("/news")
//             setTechList(data)
//          } catch (error) {
//             console.log(error)
//          }
//       }
//       getTechs()
//    }, [])

   //Requisição para Postagem (Tech)
//    const TechCreate = async (formData) => {
//       try {
//          const newTech = { ...formData, author: user.name }

//          //token do usuário para autorização de criação de Tech:
//          const token = localStorage.getItem("@TOKEN")

//          const { data } = await api.Tech("/news", newTech, {
//             headers: {
//                Authorization: `Bearer ${token}`,
//             },
//          })

//          setTechList([...TechList, data])
//       } catch (error) {
//          console.log(error)
//       }
//    }

   //Requisição para edição (PATCH)
//    const TechUpdate = async (formData) => {
//       try {
//          const token = localStorage.getItem("@TOKEN")

//          const { data } = await api.patch(`/news/${editingTech.id}`, formData, {
//             headers: {
//                Authorization: `Bearer ${token}`,
//             },
//          })

//          const newTechList = TechList.map((Tech) => {
//             if (Tech.id === editingTech.id) {
//                return data
//             } else {
//                return Tech
//             }
//          })

//          setTechList(newTechList)
//          setEditingTech(null)
//       } catch (error) {
//          console.log(error)
//       }
//    }

   //Requisição para deletar (DELETE)
//    const TechDelete = async (deletingId) => {
//       try {
//          const token = localStorage.getItem("@TOKEN")

//          await api.delete(`/news/${deletingId}`, {
//             headers: {
//                Authorization: `Bearer ${token}`,
//             },
//          })

//          const newTechList = TechList.filter((Tech) => Tech.id !== deletingId)
//          setTechList(newTechList)

//          alert("Exclusão realizada com sucesso!")
//       } catch (error) {
//          console.log(error)
//       }
//    }

   return (
      <TechContext.Provider
         value={{
            // TechCreate,
            // TechUpdate,
            // TechDelete,
            // TechList,
            // editingTech,
            // setEditingTech,
         }}
      >
         {children}
      </TechContext.Provider>
   )
}
