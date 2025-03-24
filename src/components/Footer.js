import React from "react";
import { FaWhatsapp, FaInstagram, FaEnvelope } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer hidden">
      <div className="social-container">
        <h3>Redes Sociais</h3>
        <div className="icons">
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={24} />
          </a>
          <a
            href="https://www.instagram.com/seuInstagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={24} />
          </a>
          <a href="mailto:email@exemplo.com">
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>

      <p className="copyright">
        © 2025 Oficina Mecânica - Todos os direitos reservados.
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
