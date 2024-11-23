import React from "react";
import Link from "next/link"; 
import styles from "./Cards.module.css";

const Cards: React.FC = () => {
  return (
    <section className={styles.sec}>
      <h2 className={styles.ttl}>Navegue pelo futuro</h2>
      <p className={styles.stl}>
        O GreenFlow está repleto de informações, ações e projetos para ajudar você a se envolver com os problemas e soluções em que estamos trabalhando. Aqui estão alguns lugares para começar.
      </p>
      <div className={styles.crds}>
        <Link href="/Problemas" className={styles.crd}>
          <img
            src="/problema.PNG"
            alt="Problemas"
            className={styles.img}
          />
          <h3 className={styles.ttlCrd}>Problemas</h3>
          <p className={styles.txt}>
            Mergulhe em nossos recursos e descubra os principais problemas que estamos enfrentando juntos.
          </p>
        </Link>

        <Link href="/Dicas" className={styles.crd}>
          <img
            src="/dicaa.PNG"
            alt="Dicas"
            className={styles.img}
          />
          <h3 className={styles.ttlCrd}>Dicas</h3>
          <p className={styles.txt}>
            Trabalhamos para tornar o mundo melhor. Descubra como nossas soluções transformam desafios em oportunidades.
          </p>
        </Link>

        <Link href="/Parceiros" className={styles.crd}>
          <img
            src="/acoes.PNG"
            alt="Ações"
            className={styles.img}
          />
          <h3 className={styles.ttlCrd}>Parceiros</h3>
          <p className={styles.txt}>
Seja nosso parceiro e faça parte da transformação. Colabore conosco e acompanhe os projetos em movimento!          </p>
        </Link>

        <Link href="/Projetos" className={styles.crd}>
          <img
            src="/dica.PNG"
            alt="Projetos"
            className={styles.img}
          />
          <h3 className={styles.ttlCrd}>Projetos</h3>
          <p className={styles.txt}>
            Conheça nossos projetos em andamento, descubra mais sobre eles e veja como você pode participar dessa transformação.
          </p>
        </Link>
      </div>
    </section>
  );
};

export default Cards;
