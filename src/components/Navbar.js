// Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo-gorila.png";
import "./Navbar.css";

const Navbar = () => {
  // Controla se o menu mobile está aberto ou fechado
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função para alternar o estado do menu
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <img
        src={logo}
        alt="Logo Oficina Mecânica"
        className="navbar-logo"
      />

      {/* Links (apenas para desktop) */}
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/eventos">Eventos</Link>
        <Link to="/asociacion">Asociación</Link>
        <Link to="/barbacoa">Barbacoa</Link>
        <Link to="/pista">Pista</Link>
      </div>

      {/* Ícones de contato (WhatsApp e Email) */}
      <div className="nav-icons">
        <a
          href="https://wa.me/5599999999999"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
        </a>
        <a href="mailto:exemplo@email.com">
          <FaEnvelope />
        </a>
      </div>

      {/* Botão hambúrguer (visível só no mobile) */}
      <button className="menu-toggle" onClick={handleMenuToggle}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Menu expansível do mobile */}
      <div className={`mobile-menu ${isMenuOpen ? "active" : ""}`}>
        <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
        <Link to="/eventos" onClick={() => setIsMenuOpen(false)}>Eventos</Link>
        <Link to="/asociacion" onClick={() => setIsMenuOpen(false)}>Asociación</Link>
        <Link to="/barbacoa" onClick={() => setIsMenuOpen(false)}>Barbacoa</Link>
        <Link to="/pista" onClick={() => setIsMenuOpen(false)}>Pista</Link>
      </div>
    </nav>
  );
};

export default Navbar;
