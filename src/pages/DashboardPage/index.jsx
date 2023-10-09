import Logo from "../../assets/Logo.jpg"

export const DashboardPage = () => {
    return(
       <>
         <header>
            <img src={Logo} alt="Logo KenzieHub" />
            <button>Sair</button>
         </header>
         <main>
            <div>
                <h2>Olá, Samuel Leão</h2>
                <span>Primeiro módulo (Introdução ao Frontend)</span>
            </div>
            <div>
                <p>Que pena! Estamos em desenvolvimento :(</p>
                <span>Nossa aplicação está em desenvolvimento, em breve teremos novidades</span>
            </div>
         </main>
       </>
    )
}