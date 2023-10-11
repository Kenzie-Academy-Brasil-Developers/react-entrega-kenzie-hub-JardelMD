import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "../Input"
import { Select } from "../Select"
import styles from "./style.module.scss"
import { useNavigate } from "react-router-dom"
import { formRegisterSchema } from "../formRegisterSchema"
import { api } from "../../services/api"
import { useState } from "react"

export const FormRegister = ({ toast }) => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(formRegisterSchema),
    });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const userRegister = async (formData) => {
        try {
            setLoading(true);
            const { data } = await api.post('/users', formData);
            console.log(data);
            navigate("/");
            toast.success("Usuário cadastrado com sucesso!");
        } catch (error) {
            console.log(error);
            if (error.response?.data === "Email already exists") {
                toast.warn("Usuário já cadastrado!");
            }
        } finally {
            setLoading(false);
        }
    }
    const submit = (formData) => {
        userRegister(formData);
    }

    return (
        <section className={styles.container}>
            <h2 className="title1 alignCenter">Crie sua conta</h2>
            <span className="text1 alignCenter">Rapido e grátis, vamos nessa</span>
            <form className={styles.form} onSubmit={handleSubmit(submit)}>
                <Input
                    type="text"
                    id="name"
                    placeholder="Digite aqui seu nome"
                    label="Nome"
                    {...register("name")}
                    error={errors.name}
                />
                <Input
                    type="email"
                    id="email"
                    placeholder="Digite aqui seu email"
                    label="Email"
                    {...register("email")}
                    error={errors.email}
                />
                <Input
                    type="password"
                    id="password"
                    placeholder="Digite aqui sua senha"
                    label="Senha"
                    {...register("password")}
                    error={errors.password}
                />
                <Input
                    type="password"
                    id="confirmPassword"
                    placeholder="Digite novamente sua senha"
                    label="Confirmar Senha"
                    {...register("confirmPassword")}
                    error={errors.confirmPassword}
                />
                <Input
                    type="text"
                    id="bio"
                    placeholder="Fale sobre você"
                    label="Bio"
                    {...register("bio")}
                    error={errors.bio}
                />
                <Input
                    type="text"
                    id="contact"
                    placeholder="Opção de contato"
                    label="Contato"
                    {...register("contact")}
                    error={errors.contact}
                />
                <Select
                    label="Selecionar módulo"
                    {...register("course_module")}
                    id="course_module"
                    error={errors.course_module}>
                    <option value="Primeiro Módulo">Primeiro módulo (Introdução ao Frontend)</option>
                    <option value="Segundo Módulo">Segundo módulo (Frontend Avançado)</option>
                    <option value="Terceiro Módulo">Terceiro módulo (Introdução ao Backend)</option>
                    <option value="Quarto Módulo">Quarto módulo (Backend Avançado)</option>
                </Select>
                <button className="btnNegative" type="submit">Cadastrar</button>
            </form>
        </section>
    )
}