import { Link } from "react-router-dom"

export const NotFoundPage = () => {
    return (
        <main>
            <h1>Error 404: Página não encontrada</h1>
            <Link to="/">Voltar a página de Login</Link>
        </main>
    )
}