"use client";

import React, { useState } from "react";
import estilos from "./Fontes.module.css";

interface FonteEnergia {
  id: number;
  nome: string;
  tipo: string;
  local: string;
  descricao: string;
  impactoAmbiental: string;
}

const FontesEnergia: React.FC = () => {
  const [fontes, setFontes] = useState<FonteEnergia[]>([
    {
      id: 1,
      nome: "Fonte Solar 1",
      tipo: "Solar",
      local: "Localização 1",
      descricao: "Descrição da Fonte Solar 1.",
      impactoAmbiental: "Baixo",
    },
    {
      id: 2,
      nome: "Fonte Eólica 1",
      tipo: "Eólica",
      local: "Localização 2",
      descricao: "Descrição da Fonte Eólica 1.",
      impactoAmbiental: "Médio",
    },
  ]);

  const [fonteEdicao, setFonteEdicao] = useState<FonteEnergia | null>(null);
  const [novoNome, setNovoNome] = useState<string>("");
  const [novoTipo, setNovoTipo] = useState<string>("");
  const [novoLocal, setNovoLocal] = useState<string>("");
  const [novaDescricao, setNovaDescricao] = useState<string>("");
  const [novoImpactoAmbiental, setNovoImpactoAmbiental] = useState<string>("");

  const [novaFonteModalAberto, setNovaFonteModalAberto] = useState(false);
  const [novoNomeFonte, setNovoNomeFonte] = useState<string>("");
  const [novoTipoFonte, setNovoTipoFonte] = useState<string>("");
  const [novoLocalFonte, setNovoLocalFonte] = useState<string>("");
  const [novaDescricaoFonte, setNovaDescricaoFonte] = useState<string>("");
  const [novoImpactoAmbientalFonte, setNovoImpactoAmbientalFonte] = useState<string>("");

  const handleEditar = (id: number) => {
    const fonte = fontes.find((fonte) => fonte.id === id);
    if (fonte) {
      setFonteEdicao(fonte);
      setNovoNome(fonte.nome);
      setNovoTipo(fonte.tipo);
      setNovoLocal(fonte.local);
      setNovaDescricao(fonte.descricao);
      setNovoImpactoAmbiental(fonte.impactoAmbiental);
    }
  };

  const handleSalvarEdicao = () => {
    if (fonteEdicao) {
      const fontesAtualizadas = fontes.map((fonte) =>
        fonte.id === fonteEdicao.id
          ? {
              ...fonte,
              nome: novoNome,
              tipo: novoTipo,
              local: novoLocal,
              descricao: novaDescricao,
              impactoAmbiental: novoImpactoAmbiental,
            }
          : fonte
      );
      setFontes(fontesAtualizadas);
      setFonteEdicao(null);
    }
  };

  const handleAdicionarNovaFonte = () => {
    const novaFonte: FonteEnergia = {
      id: fontes.length + 1,
      nome: novoNomeFonte,
      tipo: novoTipoFonte,
      local: novoLocalFonte,
      descricao: novaDescricaoFonte,
      impactoAmbiental: novoImpactoAmbientalFonte,
    };

    setFontes([...fontes, novaFonte]);
    setNovaFonteModalAberto(false);
  };

  return (
    <section className={estilos.fontesEnergia}>
      <div className={estilos.cabecalho}>
        <h2>Fontes de Energia</h2>
        <button
          className={estilos.botaoNovaFonte}
          onClick={() => setNovaFonteModalAberto(true)}
        >
          Nova Fonte
        </button>
      </div>

      <div className={estilos.listaFontes}>
        {fontes.map((fonte) => (
          <div key={fonte.id} className={estilos.cardFonte}>
            <div className={estilos.infoFonte}>
              <h3 className={estilos.nomeFonte}>{fonte.nome}</h3>
              <p className={estilos.tipoFonte}>
                <strong>Tipo:</strong> {fonte.tipo}
              </p>
              <p className={estilos.localFonte}>
                <strong>Local:</strong> {fonte.local}
              </p>
              <p className={estilos.descricaoFonte}>
                <strong>Descrição:</strong> {fonte.descricao}
              </p>
              <p className={estilos.impactoAmbientalFonte}>
                <strong>Impacto Ambiental:</strong> {fonte.impactoAmbiental}
              </p>
            </div>
            <div className={estilos.acaoFonte}>
              <button
                className={estilos.botaoEditar}
                onClick={() => handleEditar(fonte.id)}
              >
                <img src="/edit.png" alt="Editar" className={estilos.iconeEditar} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {fonteEdicao && (
        <div className={estilos.modal}>
          <div className={estilos.modalConteudo}>
            <h3>Editar Fonte de Energia</h3>
            <label>
              Nome:
              <input
                type="text"
                value={novoNome}
                onChange={(e) => setNovoNome(e.target.value)}
                className={estilos.inputEditavel}
              />
            </label>
            <label>
              Tipo:
              <input
                type="text"
                value={novoTipo}
                onChange={(e) => setNovoTipo(e.target.value)}
                className={estilos.inputEditavel}
              />
            </label>
            <label>
              Local:
              <input
                type="text"
                value={novoLocal}
                onChange={(e) => setNovoLocal(e.target.value)}
                className={estilos.inputEditavel}
              />
            </label>
            <label>
              Descrição:
              <textarea
                value={novaDescricao}
                onChange={(e) => setNovaDescricao(e.target.value)}
                className={estilos.textareaEditavel}
              />
            </label>
            <label>
              Impacto Ambiental:
              <input
                type="text"
                value={novoImpactoAmbiental}
                onChange={(e) => setNovoImpactoAmbiental(e.target.value)}
                className={estilos.inputEditavel}
              />
            </label>
            <div className={estilos.acaoModal}>
              <button className={estilos.botaoSalvar} onClick={handleSalvarEdicao}>
                Salvar
              </button>
              <button
                className={estilos.botaoCancelar}
                onClick={() => setFonteEdicao(null)}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      {novaFonteModalAberto && (
        <div className={estilos.modal}>
          <div className={estilos.modalConteudo}>
            <h3>Adicionar Nova Fonte de Energia</h3>
            <label>
              Nome:
              <input
                type="text"
                value={novoNomeFonte}
                onChange={(e) => setNovoNomeFonte(e.target.value)}
                className={estilos.inputEditavel}
              />
            </label>
            <label>
              Tipo:
              <input
                type="text"
                value={novoTipoFonte}
                onChange={(e) => setNovoTipoFonte(e.target.value)}
                className={estilos.inputEditavel}
              />
            </label>
            <label>
              Local:
              <input
                type="text"
                value={novoLocalFonte}
                onChange={(e) => setNovoLocalFonte(e.target.value)}
                className={estilos.inputEditavel}
              />
            </label>
            <label>
              Descrição:
              <textarea
                value={novaDescricaoFonte}
                onChange={(e) => setNovaDescricaoFonte(e.target.value)}
                className={estilos.textareaEditavel}
              />
            </label>
            <label>
              Impacto Ambiental:
              <input
                type="text"
                value={novoImpactoAmbientalFonte}
                onChange={(e) => setNovoImpactoAmbientalFonte(e.target.value)}
                className={estilos.inputEditavel}
              />
            </label>
            <div className={estilos.acaoModal}>
              <button
                className={estilos.botaoAdicionarFonte}
                onClick={handleAdicionarNovaFonte}
              >
                Adicionar
              </button>
              <button
                className={estilos.botaoCancelar}
                onClick={() => setNovaFonteModalAberto(false)}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FontesEnergia;
