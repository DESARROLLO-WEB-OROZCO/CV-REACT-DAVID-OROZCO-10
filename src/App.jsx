import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Todos from "./pages/Todos";
import Registro from "./pages/Registro";

export default function App() {
  return (
    <BrowserRouter>
      <nav style={{ display: "flex", gap: "20px", padding: "20px" }}>
        <Link to="/">Inicio</Link>
        <Link to="/todos">Todos</Link>
        <Link to="/registro">Registro</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </BrowserRouter>
  );
}
