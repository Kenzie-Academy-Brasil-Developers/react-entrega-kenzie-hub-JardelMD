import { FormLogin } from "../../components/FormLogin"
import styles from "./style.module.scss"

export const LoginPage = ({toast, setUser}) => {
    return (
        <div>
            <header className={styles.header}>
                <h1 className="logo">Kenzie Hub</h1>
            </header>
            <main className={styles.main}>
                <FormLogin toast={toast} setUser={setUser}/>
            </main>
        </div>
    )
}