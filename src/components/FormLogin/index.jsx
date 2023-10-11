import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "../Input";
import styles from "./style.module.scss"
import { Link, useNavigate } from "react-router-dom";
import {formLoginSchema} from "../formLoginSchema"
import { useState } from "react";

export const FormLogin = ({setUser}) => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(formLoginSchema),
     });
     const [loading, setLoading] = useState(false);

     const navigate = useNavigate();

     const userLogin = async (formData) => {
        try {
          setLoading(true);
          const { data } = await api.post("/sessions", formData);
          setUser(data.name);
          localStorage.setItem("@TOKEN", data.token);
          navigate("/dashboard");
        } catch (error) {
          console.log(error);
          if (error.response?.data === "Incorrect password") {
            alert("Credenciais inválidas");
          }
        } finally {
          setLoading(false);
        }
      };
    const submit = (formData) => {
       userLogin(formData);
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
