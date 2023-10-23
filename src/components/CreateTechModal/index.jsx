// import { useContext } from "react"
import { useForm } from "react-hook-form"
import { Select } from "../Select"
import { Input } from "../Input"
// import { TechContext } from "../../providers/TechContext"

//Formulário de criação de tecnologia
export const CreateTechModal = () => {
    const { register, handleSubmit } = useForm()

    // const { techCreate } = useContext(TechContext)

    // const submit = (formData) => {
    //     techCreate(formData)
    // }

    return (
        <>
            <header>
                <div>
                    <h3>Cadastrar Tecnologia</h3>
                    <button>X</button>
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
                <button type="submit">Cadastrar Tecnologia</button>
            </form>
        </>
    )
}