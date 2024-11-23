import React from "react";
import styles from "./Noticias.module.css";

const noticias = [
  {
    titulo: "Novo projeto de energia solar começa no país",
    descricao:
      "O projeto de energia solar está expandindo e ajudando a diminuir a pegada de carbono. A iniciativa vai beneficiar milhares de pessoas.",
    link: "https://www.portalsolar.com.br/energia-solar-no-brasil.html",
  },
  {
    titulo: "Tecnologia limpa revoluciona a indústria",
    descricao:
      "A nova tecnologia limpa está sendo adotada por empresas do setor industrial para reduzir os impactos ambientais e melhorar a eficiência energética.",
    link: "https://www.dw.com/pt-br/o-futuro-da-tecnologia-limpa/a-54671365",
  },
  {
    titulo: "Iniciativas verdes em escolas aumentam",
    descricao:
      "Várias escolas estão implementando programas educativos sobre sustentabilidade e práticas ecológicas. A educação ambiental nunca foi tão importante.",
    link: "https://www.un.org/pt/chronicle/article/iniciativas-verdes-em-escolas-destacam-sustentabilidadehttps://www.unesco.org/pt/articles/unesco-lanca-novas-iniciativas-para-educacao-verde-nas-salas-de-aula",
  },
  {
    titulo: "A lei de infraestrutura - US$ 1,2 trilhão para energia limpa e infraestrutura",
    descricao:
      "O Senado dos EUA aprova um projeto de infraestrutura de US$ 1,2 trilhão que inclui US$ 73 bilhões para energia limpa e US$ 7 bilhões para infraestrutura de veículos elétricos.",
    link: "https://www.https://www.portalsolar.com.br/noticias/tecnologia/equipamentos-fv/medidas-de-incentivo-a-energia-solar-sao-incluidas-em-proposta-de-us-1-5-trilhao-em-investimentos-em-infraestrutura-nos.com/portuguese/internacional-58545742",
  },
  {
    titulo: "Declaração do G20 sobre Energia Renovável",
    descricao:
      "Na cúpula do G20, líderes reforçaram o fim de subsídios a fósseis e o avanço das energias renováveis, marcando progresso na transição energética global.",
    link: "https://www.g20.org/pt-br/noticias/brasil-na-lideranca-global-rumo-aos-brics-e-a-cop-30-em-2025#:~:text=O%20documento%20final%20do%20G20,duplicar%20a%20efici%C3%AAncia%20energ%C3%A9tica%20global.",
  },
  {
    titulo: "Avanços em Energia Solar Flutuante",
    descricao:
      "Painéis solares flutuantes estão ganhando espaço em 2024, aproveitando áreas aquáticas para aumentar a eficiência e oferecer alternativas limpas contra as mudanças climáticas.",
    link: "https://www.pv-magazine-brasil.com/2024/05/10/avancos-da-solar-flutuante-no-brasil/#:~:text=Cientistas%20brasileiros%20calcularam%20o%20potencial,SP%20com%203%2C87%20GW.",
  },
];

const Noticias: React.FC = () => {
  return (
    <section className={styles.noticias}>
      <h2 className={styles.titulo}>O que está acontecendo agora?</h2>
      <div className={styles.lista}>
        {noticias.map((noticia, index) => (
          <div key={index} className={styles.item}>
            <h3 className={styles.tituloItem}>{noticia.titulo}</h3>
            <p className={styles.descricao}>{noticia.descricao}</p>
            <a href={noticia.link} className={styles.verMais} target="_blank" rel="noopener noreferrer">
              Ver Mais
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Noticias;
