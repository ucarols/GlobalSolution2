import React from "react";
import styles from "./Dicas.module.css";

const Dicas: React.FC = () => {
  return (
    <div className={styles.cont}>
      <h1 className={styles.tit}>Dicas de Energia e Sustentabilidade</h1>
      <div className={styles.lista}>
        <div className={styles.dica}>
          <h3 className={styles.subtit}>1. Desligue os Equipamentos Eletrônicos</h3>
          <p className={styles.desc}>
            Desligar aparelhos quando não estão em uso é uma das formas mais fáceis e eficazes de economizar energia.
          </p>
        </div>
        <div className={styles.dica}>
          <h3 className={styles.subtit}>2. Utilize Lâmpadas LED</h3>
          <p className={styles.desc}>
            As lâmpadas LED consomem até 80% menos energia do que as lâmpadas incandescentes, além de durar muito mais.
          </p>
        </div>
        <div className={styles.dica}>
          <h3 className={styles.subtit}>3. Invista em Energia Solar</h3>
          <p className={styles.desc}>
            A energia solar é uma alternativa limpa e renovável que pode reduzir significativamente os custos de energia no longo prazo.
          </p>
        </div>
        <div className={styles.dica}>
          <h3 className={styles.subtit}>4. Use Equipamentos com Selo Procel</h3>
          <p className={styles.desc}>
            Optar por aparelhos com selo Procel de eficiência energética pode ajudar a reduzir o consumo e economizar energia.
          </p>
        </div>
        <div className={styles.dica}>
          <h3 className={styles.subtit}>5. Aproveite a Luz Natural</h3>
          <p className={styles.desc}>
            Abra as janelas e aproveite a luz do dia sempre que possível, isso reduzirá a necessidade de usar luz artificial.
          </p>
        </div>
        <div className={styles.dica}>
          <h3 className={styles.subtit}>6. Instale Termostatos Inteligentes</h3>
          <p className={styles.desc}>
            Controlar automaticamente a temperatura e otimizar o uso de energia em sistemas de aquecimento e ar condicionado.
          </p>
        </div>
        <div className={styles.dica}>
          <h3 className={styles.subtit}>7. Realize Manutenção Regular dos Equipamentos</h3>
          <p className={styles.desc}>
            Manter os sistemas de climatização, eletrodomésticos e outros aparelhos limpos e funcionando corretamente ajuda a manter a eficiência energética.
          </p>
        </div>
        <div className={styles.dica}>
          <h3 className={styles.subtit}>8. Utilize Válvulas de Economia de Água</h3>
          <p className={styles.desc}>
            Instalar válvulas de economia de água reduz o consumo e, consequentemente, a necessidade de aquecer água para uso doméstico.
          </p>
        </div>
        <div className={styles.dica}>
          <h3 className={styles.subtit}>9. Utilize Eletrodomésticos em Horários de Menor Consumo</h3>
          <p className={styles.desc}>
            Usar os eletrodomésticos em horários fora do pico reduz a pressão sobre a rede elétrica e pode economizar energia.
          </p>
        </div>
        <div className={styles.dica}>
          <h3 className={styles.subtit}>10. Plante Árvores ao Redor de Casa</h3>
          <p className={styles.desc}>
            As árvores fornecem sombra natural e ajudam a reduzir o uso de ar condicionado, mantendo a casa mais fresca.
          </p>
        </div>
        <div className={styles.dica}>
          <h3 className={styles.subtit}>11. Aproveite o Uso de Energia Eólica</h3>
          <p className={styles.desc}>
            Em áreas adequadas, o uso de pequenos aerogeradores pode ser uma alternativa de energia renovável para a sua casa.
          </p>
        </div>
        <div className={styles.dica}>
          <h3 className={styles.subtit}>12. Isolamento Térmico da Casa</h3>
          <p className={styles.desc}>
            Isolar a casa corretamente (paredes, janelas e portas) ajuda a manter a temperatura interna e reduz a necessidade de aquecimento ou resfriamento artificial.
          </p>
        </div>
        <div className={styles.dica}>
          <h3 className={styles.subtit}>13. Reduza o Uso de Secadores de Roupas</h3>
          <p className={styles.desc}>
            Secar roupas ao ar livre reduz a dependência de secadores elétricos e economiza energia.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dicas;
