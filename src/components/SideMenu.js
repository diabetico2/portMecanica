// SideMenu.js
import React from "react";
import { Link } from "react-router-dom";
import iconZap from "../assets/icon-zap.png";
import iconInsta from "../assets/icon-insta.png";
import iconTiktok from "../assets/icon-tiktok.png";
import "./SideMenu.css";

const SideMenu = ({ isOpen, onClose }) => {
  return (
    <div className={`side-menu ${isOpen ? "open" : ""}`}>
      {/* Botão “X” para fechar */}
      <button className="close-btn" onClick={onClose}>
        &times;
      </button>

      {/* Links de navegação (mobile) */}
      <nav className="side-menu-nav">
        <Link to="/" onClick={onClose}>
          Home
        </Link>
        <Link to="/eventos" onClick={onClose}>
        Taller
        </Link>
        <Link to="/asociacion" onClick={onClose}>
          Asociación
        </Link>
        <Link to="/barbacoa" onClick={onClose}>
          Barbacoa
        </Link>
        <Link to="/pista" onClick={onClose}>
          Pista
        </Link>
        <div className="mobile-social">
          <a
            href="https://wa.me/5599999999999"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={iconZap} alt="WhatsApp" className="social-icon" />
          </a>
          <a
            href="https://www.instagram.com/gorila4x4.es?igsh=anNvNDV6YjN3MGJ3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={iconInsta} alt="Instagram" className="social-icon" />
          </a>
          <a
            href="https://www.tiktok.com/@gorila4x4.es?_t=zn-8uvnhsyfn5j&_r=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={iconTiktok} alt="TikTok" className="social-icon" />
          </a>

          {/* Exemplo de Linktree, caso queira incluir */}

          <a
            href="https://tr.ee/mZIbiR6OMN"
            target="_blank"
            rel="noopener noreferrer"
            className="linktree-btn"
          >
            Linktree
          </a>
        </div>
      </nav>

      {/* Redes Sociais no final do menu */}
    </div>
  );
};

export default SideMenu;
