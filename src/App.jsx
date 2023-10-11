import { RoutesMain } from "./routes/RoutesMain"
import "./styles/index.scss"
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <RoutesMain toast={toast}/>
      <ToastContainer autoClose={2000} />
    </div>
  )
}

export default App