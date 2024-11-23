import React from "react";
import styles from "./Hero.module.css";

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <h1 className={styles.h1}>Energia que transforma.</h1>
        <p className={styles.p}>
          Pequenas atitudes, grande economia. A mudança começa com você!
        </p>
        <button className={styles.button}>Saiba mais</button>
      </div>
      <img
        src="/energia.PNG"
        alt="Energia que transforma"
        className={styles.image}
      />
    </section>
  );
};

export default Hero;
