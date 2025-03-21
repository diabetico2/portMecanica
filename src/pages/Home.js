import React from "react";
import "../App.css";
import bannerImg from "../assets/placeholder.jpg";
import manutencaoImg from "../assets/placeholder.jpg";
import oleoImg from "../assets/placeholder.jpg";
import alinhamentoImg from "../assets/placeholder.jpg";
import diagnosticoImg from "../assets/placeholder.jpg";


const Home = () => {
  const items = [
    {
      title: "Serviço de Manutenção",
      text: "Oferecemos manutenção completa para garantir que seu veículo esteja sempre em perfeito estado.",
      position: "left",
      img: manutencaoImg,
    },
    {
      title: "Troca de Óleo",
      text: "Realizamos troca de óleo com produtos de alta qualidade para o melhor desempenho do motor.",
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
      <div className="banner">
        <img src={bannerImg} alt="Banner Oficina Mecânica" className="banner-img" />
      </div>

      {/* Descrição */}
      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>

      {/* Seção de itens */}
      <div className="item-container">
        {items.map((item, index) => (
          <div key={index} className={`item ${item.position}`}>
            {item.position === "left" ? (
              <>
                <img src={item.img} alt={item.title} className="item-img" />
                <div className="text-box">
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                </div>
              </>
            ) : (
              <>
                <div className="text-box">
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                </div>
                <img src={item.img} alt={item.title} className="item-img" />
              </>
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>redes/contatos</p>
      </footer>
    </div>
  );
};

export default Home;
