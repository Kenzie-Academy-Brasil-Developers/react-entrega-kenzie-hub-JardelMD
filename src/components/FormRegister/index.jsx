import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "../Input"
import { Select } from "../Select"
import styles from "./style.module.scss"
import { Link } from "react-router-dom"
import { formRegisterSchema } from "../formRegisterSchema"

export const FormRegister = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(formRegisterSchema),
    });

    const submit = (formData) => {
        console.log(formData);
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
                    {...register("module")}>
                    <option value="Primeiro Módulo">Primeiro Módulo</option>
                    <option value="Segundo Módulo">Segundo Módulo</option>
                    <option value="Terceiro Módulo">Terceiro Módulo</option>
                </Select>
                <button className="btnNegative" type="submit">Cadastrar</button>
            </form>
        </section>
    )
}