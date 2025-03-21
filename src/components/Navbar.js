import React from "react";
import logo from "../assets/placeholder.jpg"; // Substitua pelo caminho correto

const Navbar = () => {
  return (
    <nav
      style={{
        backgroundColor: "#333",
        padding: "10px",
        color: "#fff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: "100%",
      }}
    >
      <img src={logo} alt="Logo Oficina Mecânica" style={{ height: "50px" }} />
      <h1>contatos</h1>
    </nav>
  );
};

export default Navbar;
