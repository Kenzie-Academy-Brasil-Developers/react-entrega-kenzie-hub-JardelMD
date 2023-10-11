import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "../Input";
import styles from "./style.module.scss"
import { Link } from "react-router-dom";
import {formLoginSchema} from "../formLoginSchema"

export const FormLogin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(formLoginSchema),
     });

    const submit = (formData) => {
        console.log(formData);
    }

    return (
        <section className={styles.container}>
            <h2 className="title1 alignCenter">Login</h2>
            <form className={styles.form} onSubmit={handleSubmit(submit)}>
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
                <button className="btnDefault" type="submit">Entrar</button>
                <p className="headlineBold">Ainda não possui uma conta?</p>
                 <Link className={styles.btn}  to={"/register"}><button className={styles.word}>Cadastre-se</button></Link > 
            </form>
        </section>
    )
}
