import { useEffect } from "react";

const useScrollAnimation = () => {
  useEffect(() => {
    const handleScroll = () => {
      const hiddenElements = document.querySelectorAll(".hidden");

      hiddenElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
          el.classList.add("show");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Para ativar os elementos já visíveis ao carregar

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // 🔹 Mantemos a array vazia para evitar dependências desnecessárias

  return null;
};

export default useScrollAnimation;
