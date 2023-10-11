import { Link } from "react-router-dom"
import styles from "./style.module.scss"

export const DashboardPage = () => {
    return (
        <>
            <header className={styles.header}>
                <h1 className="logo">Kenzie Hub</h1>
                <Link to={"/"}><button className={styles.btn}>Sair</button></Link>
            </header>
            <main>
                <hr className={styles.separator}/>
                <div className={styles.info}>
                    <h2 className="title1 nowrap">Olá, Samuel Leão</h2>
                    <span className="text1 ">Primeiro módulo (Introdução ao Frontend)</span>
                </div>
                <hr className={styles.separator}/>
                <div className={styles.info2}>
                    <p className="title1">Que pena! Estamos em desenvolvimento :(</p>
                    <span className={styles.span}>Nossa aplicação está em desenvolvimento, em breve teremos novidades</span>
                </div>
                
            </main>
        </>
    )
}