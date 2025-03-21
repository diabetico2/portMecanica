import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#222",
        padding: "10px",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <p>&copy; 2025 Oficina Mecânica - Todos os direitos reservados.</p>
      <p>
        &copy; feito por{" "}
        <a href="https://linktr.ee/allanjosepereira">
          Allan José De Oliveira Pereira
        </a>
      </p>
    </footer>
  );
};

export default Footer;
