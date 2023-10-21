import { RoutesMain } from "./routes/RoutesMain"
import "./styles/index.scss"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div className="App">
      <RoutesMain />
      <ToastContainer autoClose={2000} theme="dark"/>
    </div>
  )
}

export default App