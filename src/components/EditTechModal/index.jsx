import { useContext } from "react"
import { useForm } from "react-hook-form"
import { TechContext } from "../../providers/TechContext"

export const EditTechModal = () => {
       const { techUpdate ,editingTech, setEditingTech } = useContext(TechContext)

       const { register, handleSubmit } = useForm({
          values: {
             title: editingTech.title,
             content: editingTech.content,
             category: editingTech.category,
          },
       })

    const submit = (formData) => {
        techUpdate(formData)
    }

    return (
        <>
            <header>
                <div>
                    <h3>Tecnologia Detalhes</h3>
                    <button onClick={() => setEditingTech(null)}>X</button>
                </div>
            </header>
            <form onSubmit={handleSubmit(submit)}>
                <Input
                    type="text"
                    id="tech"
                    placeholder="Cadastre sua tecnologia"
                    label="Nome"
                    {...register("tech")}
                    error={errors.tech}
                />
                <Select
                    label="Selecionar status"
                    id="course_status"
                    {...register("course_status")}
                    error={errors.course_status}>
                    <option value="Iniciante">Iniciante</option>
                    <option value="Intermediário">Intermediário</option>
                    <option value="Avançado">Avançado</option>
                </Select>
                <button type="submit">Salvar Alterações</button>
            </form>
        </>
    )
}
