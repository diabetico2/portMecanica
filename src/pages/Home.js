import React from 'react';
import '../App.css';

const Home = () => {
  const items = [
    {
      title: "Serviço de Manutenção",
      text: "Oferecemos manutenção completa para garantir que seu veículo esteja sempre em perfeito estado.",
      position: "left"
    },
    {
      title: "Troca de Óleo",
      text: "Realizamos troca de óleo com produtos de alta qualidade para o melhor desempenho do motor.",
      position: "right"
    },
    {
      title: "Alinhamento e Balanceamento",
      text: "Evite desgaste irregular dos pneus e problemas na suspensão com nossos serviços de alinhamento.",
      position: "left"
    },
    {
      title: "Diagnóstico Completo",
      text: "Utilizamos tecnologia avançada para diagnosticar e corrigir qualquer problema no seu veículo.",
      position: "right"
    },

  ];

  return (
    <div className="container">
      {/* Banner */}
      <div className="banner">
        <h1>Imagem Placeholder</h1>
      </div>

      {/* Descrição */}
      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>

      {/* Seção de itens */}
      <div className="item-container">
        {items.map((item, index) => (
          <div key={index} className="item" style={{ flexDirection: item.position === "left" ? "row" : "row-reverse" }}>
            <div className="text-box">
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
            <div className="square"></div>
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
