import { useContext } from "react"
import styles from "./style.module.scss"
import { UserContext } from "../../providers/UserContext"
import { TechList } from "../../components/TechList"

export const DashboardPage = () => {
    const { user, userLogout } = useContext(UserContext)
    return (
        <>
            <header className={styles.header}>
                <h1 className="logo">Kenzie Hub</h1>
                <button onClick={() => userLogout()} className={styles.btn}>Sair</button>
            </header>
            <main>
                <hr className={styles.separator} />
                {user ? (
                    <div className={styles.info}>
                        <h2 className="title1 nowrap">Olá, {user.name}!</h2>
                        <span className="text1 ">{user.course_module}</span>
                    </div>
                ) : (
                    <div className={styles.info}>
                        <h2 className="title1 nowrap">Olá, Samuel Leão</h2>
                        <span className="text1 ">Primeiro módulo (Introdução ao Frontend)</span>
                    </div>
                )}
                <hr className={styles.separator} />
                {/* <div className={styles.info2}>
                    <p className="title1">Que pena! Estamos em desenvolvimento :(</p>
                    <span className={styles.span}>Nossa aplicação está em desenvolvimento, em breve teremos novidades.</span>
                </div> */}
                <div className={styles.info2}>
                    <h3 className="title2">Tecnologias</h3>
                    <button className={styles.buttonPlus}>+</button>
                </div>
                <TechList />
            </main>
        </>

    )
}