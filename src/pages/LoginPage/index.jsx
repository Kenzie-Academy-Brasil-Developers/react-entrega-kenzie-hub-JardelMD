import Logo from "../../assets/Logo.jpg"
import { FormLogin } from "../../components/FormLogin"

export const LoginPage = () => {
    return (
        <div>
            <header>
                <img src={Logo} alt="Logo KenzieHub" />
            </header>
            <main>
                <FormLogin />
            </main>
        </div>
    )
}