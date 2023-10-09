import { FormRegister } from "../../components/FormRegister"
import Logo from "../../assets/Logo.jpg"

export const RegisterPage = () => {
    return (
        <>
            <header>
                <img src={Logo} alt="Logo KenzieHub" />
                <button>Voltar</button>
            </header>
            <main>
                <FormRegister />
            </main>

        </>
    )
}