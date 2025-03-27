import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import logo from "../assets/logo-gorila.png";
import SideMenu from "./SideMenu";
import "./Navbar.css";

const Navbar = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsSideMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setIsSideMenuOpen(false);
  };

  return (
    <header className="navbar">
      <img src={logo} alt="Logo" className="navbar-logo" />

      {/* Links desktop */}
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/eventos">Eventos</Link>
        <Link to="/asociacion">Asociación</Link>
        <Link to="/barbacoa">Barbacoa</Link>
        <Link to="/pista">Pista</Link>
      </nav>

      {/* Botão de menu no mobile */}
      <button className="menu-toggle" onClick={handleOpenMenu}>
        <FaBars />
      </button>

      {/* SideMenu */}
      <SideMenu isOpen={isSideMenuOpen} onClose={handleCloseMenu} />
    </header>
  );
};

export default Navbar;
