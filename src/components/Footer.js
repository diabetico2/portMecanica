import React from "react";
import "./Footer.css"; // <- Adicione esta linha
import iconZap from "../assets/icon-zap.png";
import iconInsta from "../assets/icon-insta.png";
import iconTiktok from "../assets/icon-tiktok.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-container">
        <h3>Redes Sociais</h3>
        <div className="icons">
          <a
            href="https://wa.me/5599999999999"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={iconZap} alt="WhatsApp" />
          </a>
          <a
            href="https://www.instagram.com/gorila4x4.es?igsh=anNvNDV6YjN3MGJ3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={iconInsta} alt="Instagram" />
          </a>
          <a
            href="https://www.tiktok.com/@gorila4x4.es?_t=zn-8uvnhsyfn5j&_r=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={iconTiktok} alt="TikTok" />
          </a>
        </div>

        {/* Botão Linktree */}
        <div style={{ marginTop: "0px" }}>
          <a
            href="https://tr.ee/mZIbiR6OMN"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              backgroundColor: "#ff8000",
              padding: "10px 20px",
              color: "#fff",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold",
              boxShadow: "0 0 10px rgba(255, 128, 0, 0.6)",
            }}
          >
            Linktree
          </a>
        </div>
      </div>

      <p>
        © 2025 Bar Asociación Gorila - Todos os direitos reservados.
        <br />
        feito por{" "}
        <a
          href="https://github.com/diabetico2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Allan José De Oliveira Pereira
        </a>
      </p>
    </footer>
  );
};

export default Footer;
