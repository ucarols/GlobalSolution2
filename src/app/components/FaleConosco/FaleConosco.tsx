import React from "react";
import styles from "./FaleConosco.module.css"; 

const FaleConosco: React.FC = () => {
  return (
    <section className={styles.faleConosco}>
      <h2>Fale Conosco</h2>
      <form className={styles.formulario}>
        <input
          type="text"
          className={styles.input}
          placeholder="Seu Nome"
          required
        />
        <input
          type="email"
          className={styles.input}
          placeholder="Seu E-mail"
          required
        />
        <textarea
          className={styles.textarea}
          placeholder="Sua Mensagem"
          required
        />
        <button type="submit" className={styles.botaoEnviar}>
          Enviar
        </button>
      </form>
    </section>
  );
};

export default FaleConosco;
