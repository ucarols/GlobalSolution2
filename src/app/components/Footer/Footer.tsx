import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerC}>
        <p className={styles.texto}> 2024 GreenFlow - Athena - 1TDSB</p>
        <div className={styles.socialLinks}>
          <a href="https://facebook.com" className={styles.socialLink} target="_blank" rel="">
            Youtube
          </a>
          <a href="https://instagram.com" className={styles.socialLink} target="_blank" rel="">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
