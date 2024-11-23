import React from "react";
import Link from "next/link";
import styles from "./Header.module.css";

const Cabecalho: React.FC = () => {
  return (
    <header className={styles.cabecalho}>
      <nav className={styles.navegacao}>
        <div className={styles.logo}>
          <img src="/logoo.png" alt="Logo" className={styles.logoImg} />
          GreenFlow
        </div>
        <ul className={styles.menu}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/Sobre">Sobre</Link></li>
          <li><Link href="/Parceiros">Parceiros</Link></li>
          <li><Link href="/Fontes">Fontes</Link></li>
          <li><Link href="/Projetos">Projetos</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Cabecalho;
