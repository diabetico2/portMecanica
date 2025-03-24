import React from "react";
import "../App.css";
import useScrollAnimation from "../hooks/useScrollAnimation";

// Imagens
import bannerImg from "../assets/placeholder.jpg";
import manutencaoImg from "../assets/Churrasco.jpeg";
import oleoImg from "../assets/Carrinho.jpeg";
import alinhamentoImg from "../assets/placeholder.jpg";
import diagnosticoImg from "../assets/placeholder.jpg";

const Home = () => {
  useScrollAnimation(); // Scroll reveal

  const items = [
    {
      title: "Barbacoa",
      text: "Una barbacoa de calidad es sinónimo de buenos momentos, sabores intensos y una experiencia gastronómica inigualable. Ya sea para reuniones familiares, celebraciones o simplemente disfrutar de una comida deliciosa en nuesto Taller. ",
      position: "left",
      img: manutencaoImg,
    },
    {
      title: "Pista cochesitos 4x4 rc",
      text: " ",
      position: "right",
      img: oleoImg,
    },
    {
      title: "Alinhamento e Balanceamento",
      text: "Evite desgaste irregular dos pneus e problemas na suspensão com nossos serviços de alinhamento.",
      position: "left",
      img: alinhamentoImg,
    },
    {
      title: "Diagnóstico Completo",
      text: "Utilizamos tecnologia avançada para diagnosticar e corrigir qualquer problema no seu veículo.",
      position: "right",
      img: diagnosticoImg,
    },
  ];

  return (
    <div className="container">
      {/* Banner */}
      <div className="banner hidden">
        <img
          src={bannerImg}
          alt="Banner Oficina Mecânica"
          className="banner-img"
        />
      </div>

      {/* Descrição */}
      <p className="description hidden">
        Con precios asequibles para los socios, barbacoas, circuito RC, centro
        de reunión para los clubs de la zona, área de pernoctar, zona para
        caravanas.... ¡Y MUCHO MÁS! Contáctanos para más información.
      </p>

      {/* Serviços */}
      <div className="item-container">
        {items.map((item, index) => (
          <div key={index} className={`item ${item.position} hidden`}>
            <img src={item.img} alt={item.title} className="item-img hidden" />
            <div className="text-box hidden">
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="footer hidden">
        <p>redes/contatos</p>
      </footer>
    </div>
  );
};

export default Home;
