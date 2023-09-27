import { Outlet } from "react-router-dom";
// import './App.css';
import "./Components/Cabecalho";
import Cabecalho from "./Components/Cabecalho";
import "./styles/Forms.css";

function App() {
  return (
    <>
      <Cabecalho />
      <Outlet />
    </>
  );
}

export default App;
