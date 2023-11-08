import { Routes } from "react-router-dom";
import Menu from "./components/Menu";

const App = () => {
  return (
    <div className="App">
      <Menu />

      <Routes>{/* DEFINIR LAS RUTAS HOME, POKEMONES, DETALLE */}</Routes>
    </div>
  );
};
export default App;
