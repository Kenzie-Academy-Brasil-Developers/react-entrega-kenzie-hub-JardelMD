import { useForm } from "react-hook-form";
import { Input } from "../Input";
import { Select } from "../Select";

export const FormRegister = () => {
    const { register, handleSubmit } = useForm();

    const submit = (formData) => {
        console.log(formData);
    }

    return (
        <section>
            <h2>Crie sua conta</h2>
            <span>Rapido e grátis, vamos nessa</span>
            <form onSubmit={handleSubmit(submit)}>
                <Input
                    type="text"
                    id="name"
                    placeholder="Digite aqui seu nome"
                    label="Nome"
                    {...register("email")}
                />
                <Input
                    type="email"
                    id="email"
                    placeholder="Digite aqui seu email"
                    label="Email"
                    {...register("email")}
                />
                <Input
                    type="password"
                    id="password"
                    placeholder="Digite aqui sua senha"
                    label="Senha"
                    {...register("password")}
                />
                <Input
                    type="password"
                    id="confirmPassword"
                    placeholder="Digite novamente sua senha"
                    label="Confirmar Senha"
                    {...register("confirmPassword")}
                />
                <Input
                    type="text"
                    id="bio"
                    placeholder="Fale sobre você"
                    label="Bio"
                    {...register("bio")}
                />
                <Input
                    type="text"
                    id="contact"
                    placeholder="Opção de contato"
                    label="Contato"
                    {...register("contact")}
                />
                <label htmlFor="module">Selecionar módulo</label>
                <Select
                    label="Selecionar módulo"
                    {...register("module")}>
                    <option value="Primeiro Módulo">Primeiro Módulo</option>
                    <option value="Segundo Módulo">Segundo Módulo</option>
                    <option value="Terceiro Módulo">Terceiro Módulo</option>
                </Select>
                <button type="submit">Cadastrar</button>
            </form>
        </section>
    )
}