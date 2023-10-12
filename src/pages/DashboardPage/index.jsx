import { Link, useNavigate } from "react-router-dom"
import styles from "./style.module.scss"

export const DashboardPage = ({ user, setUser }) => {
    const navigate = useNavigate();
    const logout = () => {
        setUser("")
        localStorage.clear()
        navigate("/")
    }
    return (
        <>
            <header className={styles.header}>
                <h1 className="logo">Kenzie Hub</h1>
                <button onClick={logout} className={styles.btn}>Sair</button>
            </header>
            <main>
                <hr className={styles.separator} />
                {/* Criando ternário para usuário, se existe, retorna as informações em tela, caso contrário, informa a página do usuário samuel leão */}
                {user? (
                    <div className={styles.info}>
                    <h2 className="title1 nowrap">Olá, {user.name}</h2>
                    <span className="text1 ">{user.course_module}</span>
                </div>
                ): (
                    <div className={styles.info}>
                    <h2 className="title1 nowrap">Olá, Samuel Leão</h2>
                    <span className="text1 ">Primeiro módulo (Introdução ao Frontend)</span>
                </div>
                )}
                <hr className={styles.separator} />
                <div className={styles.info2}>
                    <p className="title1">Que pena! Estamos em desenvolvimento :(</p>
                    <span className={styles.span}>Nossa aplicação está em desenvolvimento, em breve teremos novidades</span>
                </div>
            </main>
        </>

    )
}