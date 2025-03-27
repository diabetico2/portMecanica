// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-gorila.png";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav
      style={{
        backgroundColor: "#333",
        padding: "10px 20px",
        color: "#fff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: "100%",
      }}
    >
      <img
        src={logo}
        alt="Logo Oficina Mecânica"
        style={{ height: "54px", borderRadius: "5px" }}
      />

      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <Link to="/" style={{ color: "#fff" }}>
          Home
        </Link>
        <Link to="/eventos" style={{ color: "#fff" }}>
        Eventos
        </Link>
        <Link to="/asociacion" style={{ color: "#fff" }}>
          Asociación
        </Link>
        <Link to="/barbacoa" style={{ color: "#fff" }}>
          Barbacoa
        </Link>
        <Link to="/pista" style={{ color: "#fff" }}>
          Pista
        </Link>
      </div>

      <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
        <a
          href="https://wa.me/5599999999999"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#25D366", fontSize: "1.5rem" }}
        >
          <FaWhatsapp />
        </a>
        <a
          href="mailto:exemplo@email.com"
          style={{ color: "#fff", fontSize: "1.5rem" }}
        >
          <FaEnvelope />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
