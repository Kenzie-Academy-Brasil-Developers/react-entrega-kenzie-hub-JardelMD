import { FormRegister } from "../../components/FormRegister"
import styles from "./style.module.scss"

export const RegisterPage = () => {
    return (
        <>
            <header className={styles.header}>
                <h1 className="logo">Kenzie Hub</h1>
                <button className={styles.btn}>Voltar</button>
            </header>
            <main className={styles.main}>
                <FormRegister />
            </main>

        </>
    )
}