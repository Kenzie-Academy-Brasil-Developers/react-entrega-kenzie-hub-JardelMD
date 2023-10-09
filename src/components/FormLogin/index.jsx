import { useForm } from "react-hook-form";
import { Input } from "../Input";

export const FormLogin = () => {
    const { register, handleSubmit } = useForm();

    const submit = (formData) => {
        console.log(formData);
    }

    return (
        <section>
            <h2>Login</h2>
            <form onSubmit={handleSubmit(submit)}>
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
                <button type="submit">Entrar</button>
                <p>Ainda não possui uma conta?</p>
                <button >Cadastre-se</button>
            </form>
        </section>
    )
}
