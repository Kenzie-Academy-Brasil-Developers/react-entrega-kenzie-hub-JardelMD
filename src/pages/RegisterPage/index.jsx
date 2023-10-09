import { FormRegister } from "../../components/FormRegister"

export const RegisterPage = () => {
    return (
        <>
            <header>
                <h1 className="logo">Kenzie Hub</h1>
                <button>Voltar</button>
            </header>
            <main>
                <FormRegister />
            </main>

        </>
    )
}