import React from "react";
import logo from "../assets/logo-gorila.png"; // Substitua pelo caminho correto
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
      {/* Logo */}
      <img
        src={logo}
        alt="Logo Oficina Mecânica"
        style={{ height: "54px", borderRadius: "5px" }}
      />

      {/* Contatos */}
      <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
        <a
          href="https://wa.me/5599999999999" // Substitua com seu número
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#25D366", fontSize: "1.5rem" }}
        >
          <FaWhatsapp />
        </a>

        <a
          href="mailto:exemplo@email.com" // Substitua com seu email
          style={{ color: "#fff", fontSize: "1.5rem" }}
        >
          <FaEnvelope />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
