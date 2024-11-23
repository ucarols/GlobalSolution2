import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Cards from "./components/Cards/Cards";
import Noticia from "./components/Noticias/Noticias"; 
import Footer from "./components/Footer/Footer";
import FaleConosco from "./components/FaleConosco/FaleConosco";

const Home: React.FC = () => {
  return (
    <div className="home">
      <main style={{ padding: "2rem", flex: 1 }}>
        <Hero />
        <Cards />
        <Noticia />
        <FaleConosco />
      </main>
    </div>
  );
};

export default Home;
