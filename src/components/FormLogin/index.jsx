import { useForm } from "react-hook-form";
import { Input } from "../Input";
import styles from "./style.module.scss"
import { Link } from "react-router-dom";

export const FormLogin = () => {
    const { register, handleSubmit } = useForm();

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
                />
                <Input
                    type="password"
                    id="password"
                    placeholder="Digite aqui sua senha"
                    label="Senha"
                    {...register("password")}
                />
                <button className="btnDefault" type="submit">Entrar</button>
                <p className="headlineBold">Ainda não possui uma conta?</p>
                 <Link className={styles.btn}  to={"/register"}><button className={styles.word}>Cadastre-se</button></Link > 
            </form>
        </section>
    )
}
