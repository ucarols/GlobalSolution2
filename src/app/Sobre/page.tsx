import React from "react";
import styles from "./Sobre.module.css";

const Sobre: React.FC = () => {
  return (
    <section className={styles.sobre}>
      <div className={styles.logoContainer}>
        <img src="/athena.PNG" alt="Logo da Equipe Athena" className={styles.logo} />
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.titulo}>Sobre nós</h2>
        <p className={styles.descricao}>
          A Athena é uma startup que desenvolve soluções tecnológicas{" "}
          <span className={styles.destacado}>personalizadas</span> para empresas, ajudando a{" "}
          <span className={styles.destacado}>superar</span> desafios e{" "}
          <span className={styles.destacado}>otimizar</span> processos. Nossa equipe de especialistas
          cria soluções que aumentam a <span className={styles.destacado}>eficiência</span> e a{" "}
          <span className={styles.destacado}>produtividade</span>, adaptadas às necessidades de cada
          cliente. Queremos ser parceiros estratégicos, promovendo{" "}
          <span className={styles.destacado}>inovação</span> e{" "}
          <span className={styles.destacado}>crescimento sustentável</span> para os negócios.
        </p>
      </div>

      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <div className={styles.cardIcon}>
            <img src="/missao.png" alt="Missão" className={styles.cardImg} />
          </div>
          <h4 className={styles.cardTitulo}>Missão</h4>
          <p className={styles.cardTexto}>
            Desenvolver soluções inovadoras que resolvam problemas reais, com foco em sustentabilidade e impacto positivo para a sociedade.
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.cardIcon}>
            <img src="/visao.png" alt="Visão" className={styles.cardImg} />
          </div>
          <h4 className={styles.cardTitulo}>Visão</h4>
          <p className={styles.cardTexto}>
            Ser referência em soluções tecnológicas que transformam a maneira como as empresas operam, criando um futuro mais eficiente e sustentável.
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.cardIcon}>
            <img src="/valor.png" alt="Valores" className={styles.cardImg} />
          </div>
          <h4 className={styles.cardTitulo}>Valores</h4>
          <p className={styles.cardTexto}>
            Ética, transparência, inovação e compromisso com a sustentabilidade guiam nossas decisões e ações.
          </p>
        </div>
      </div>

      <div className={styles.equipeT}>
        <h3>Conheça nossa equipe</h3>
      </div>

      <div className={styles.equipe}>
        <div className={styles.integrante}>
          <img
            src="/giulia.jpg"
            alt="Giulia Corrêa Camilo"
            className={styles.foto}
          />
          <h3 className={styles.nome}>Giulia Corrêa Camilo</h3>
          <p className={styles.informacoes}>
            <strong>Série:</strong> 1TDSB | <strong>RM: 554473</strong>
          </p>
          <div className={styles.redes}>
            <a href="https://github.com/gih0712" target="_blank" rel="">
              <img src="/github.png" alt="GitHub" className={styles.icone} />
            </a>
            <a href="https://www.linkedin.com/in/giulia-camillo-350698268?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="">
              <img src="/linkedin.png" alt="LinkedIn" className={styles.icone} />
            </a>
          </div>
        </div>

        <div className={styles.integrante}>
          <img
            src="/cacos.PNG"
            alt="Caroline de Oliveira"
            className={styles.foto}
          />
          <h3 className={styles.nome}>Caroline de Oliveira</h3>
          <p className={styles.informacoes}>
            <strong>Série:</strong> 1TDSB | <strong>RM: 559123</strong>
          </p>
          <div className={styles.redes}>
            <a href="https://github.com/ucarols" target="_blank" rel="">
              <img src="/github.png" alt="GitHub" className={styles.icone} />
            </a>
            <a href="https://www.linkedin.com/in/caroline-oliveira-3a6885298" target="_blank" rel="">
              <img src="/linkedin.png" alt="LinkedIn" className={styles.icone} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
