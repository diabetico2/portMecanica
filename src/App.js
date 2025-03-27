import React from "react";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Eventos from './pages/eventos';
import Asociacion from "./pages/Asociación";
import Barbacoa from "./pages/Barbacoa";
import Pista from "./pages/Pista";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          {/* Redirecionar rota raiz para a Home */}
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Eventos" element={<Eventos />} />
          <Route path="/asociacion" element={<Asociacion />} />
          <Route path="/barbacoa" element={<Barbacoa />} />
          <Route path="/pista" element={<Pista />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
