import React from "react";
import styles from "./Problemas.module.css";

const Problemas: React.FC = () => {
  const problemas = [
    {
      titulo: "Desperdício de Água",
      descricao:
        "A produção de energia em hidrelétricas consome grandes volumes de água, impactando ecossistemas aquáticos.",
      imagem: "/agua.jpg",
    },
    {
      titulo: "Problemas Sociais",
      descricao:
        "Comunidades locais frequentemente sofrem deslocamentos devido à construção de usinas e infraestrutura energética.",
      imagem: "/social.jpg",
    },
    {
      titulo: "Degradação Ambiental",
      descricao:
        "A construção de grandes projetos de energia pode causar desmatamento e perda de biodiversidade.",
      imagem: "/poluicao.jpg",
    },
    {
      titulo: "Altos Custos de Implementação",
      descricao:
        "Soluções sustentáveis, como energia solar e eólica, exigem altos investimentos iniciais.",
      imagem: "/solarr.jpg",
    },
    {
      titulo: "Falta de Políticas Públicas",
      descricao:
        "A ausência de incentivos e regulamentações limita a expansão das energias renováveis em muitos países.",
      imagem: "/politicas.jpg",
    },
    {
      titulo: "Mudanças Climáticas",
      descricao:
        "Eventos extremos, como secas e tempestades, dificultam a geração de energia sustentável.",
      imagem: "/aquecimento.png",
    },
    {
      titulo: "Acesso Desigual",
      descricao:
        "Muitas comunidades remotas não têm acesso a tecnologias sustentáveis devido à falta de infraestrutura.",
      imagem: "/semlux.jpg",
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Problemas Sustentáveis</h1>
      <div className={styles.lista}>
        {problemas.map((problema, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.info}>
              <h3 className={styles.titulo}>{problema.titulo}</h3>
              <p className={styles.descricao}>{problema.descricao}</p>
            </div>
            <img
              src={problema.imagem}
              alt={problema.titulo}
              className={styles.imagem}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Problemas;
