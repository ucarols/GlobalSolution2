"use client";

import React, { useState } from "react";
import estilos from "./Parceiros.module.css";

interface Parceiro {
  id: number;
  nome: string;
  tipo: string;
  email: string;
  telefone: string;
}

const Parceiros: React.FC = () => {
  const [parceiros, setParceiros] = useState<Parceiro[]>([
    {
      id: 1,
      nome: "Parceiro 1",
      tipo: "Organização",
      email: "email@parceiro.com",
      telefone: "(11) 1234-5678",
    },
    {
      id: 2,
      nome: "Parceiro 2",
      tipo: "Organização",
      email: "email@parceiro.com",
      telefone: "(11) 8765-4321",
    },
  ]);

  const [parceiroEdicao, setParceiroEdicao] = useState<Parceiro | null>(null);
  const [novoNome, setNovoNome] = useState<string>("");
  const [novoTipo, setNovoTipo] = useState<string>("Organização");
  const [novoEmail, setNovoEmail] = useState<string>("");
  const [novoTelefone, setNovoTelefone] = useState<string>("");

  const [novoParceiroModalAberto, setNovoParceiroModalAberto] = useState(false);
  const [novoNomeParceiro, setNovoNomeParceiro] = useState<string>("");
  const [novoTipoParceiro, setNovoTipoParceiro] = useState<string>("Organização");
  const [novoEmailParceiro, setNovoEmailParceiro] = useState<string>("");
  const [novoTelefoneParceiro, setNovoTelefoneParceiro] = useState<string>("");

  const handleEditar = (id: number) => {
    const parceiro = parceiros.find((parceiro) => parceiro.id === id);
    if (parceiro) {
      setParceiroEdicao(parceiro);
      setNovoNome(parceiro.nome);
      setNovoTipo(parceiro.tipo);
      setNovoEmail(parceiro.email);
      setNovoTelefone(parceiro.telefone);
    }
  };

  const handleSalvarEdicao = () => {
    if (parceiroEdicao) {
      const parceirosAtualizados = parceiros.map((parceiro) =>
        parceiro.id === parceiroEdicao.id
          ? {
              ...parceiro,
              nome: novoNome,
              tipo: novoTipo,
              email: novoEmail,
              telefone: novoTelefone,
            }
          : parceiro
      );
      setParceiros(parceirosAtualizados);
      setParceiroEdicao(null);
    }
  };

  const handleAdicionarNovoParceiro = () => {
    const novoParceiro: Parceiro = {
      id: parceiros.length + 1,
      nome: novoNomeParceiro,
      tipo: novoTipoParceiro,
      email: novoEmailParceiro,
      telefone: novoTelefoneParceiro,
    };

    setParceiros([...parceiros, novoParceiro]);
    setNovoParceiroModalAberto(false);
  };

  return (
    <section className={estilos.parceiros}>
      <div className={estilos.cabecalho}>
        <h2>Meus Parceiros</h2>
        <button
          className={estilos.botaoNovoParceiro}
          onClick={() => setNovoParceiroModalAberto(true)}
        >
          Novo Parceiro
        </button>
      </div>

      <div className={estilos.listaParceiros}>
        {parceiros.map((parceiro) => (
          <div key={parceiro.id} className={estilos.cardParceiro}>
            <div className={estilos.infoParceiro}>
              <h3 className={estilos.nomeParceiro}>{parceiro.nome}</h3>
              <p className={estilos.tipoParceiro}>
                <strong>Tipo:</strong> {parceiro.tipo}
              </p>
              <p className={estilos.emailParceiro}>
                <strong>Email:</strong> {parceiro.email}
              </p>
              <p className={estilos.telefoneParceiro}>
                <strong>Telefone:</strong> {parceiro.telefone}
              </p>
            </div>
            <div className={estilos.acaoParceiro}>
              <button
                className={estilos.botaoEditar}
                onClick={() => handleEditar(parceiro.id)}
              >
                <img src="/edit.png" alt="Editar" className={estilos.iconeEditar} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {parceiroEdicao && (
        <div className={estilos.modal}>
          <div className={estilos.modalConteudo}>
            <h3>Editar Parceiro</h3>
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
              Email:
              <input
                type="email"
                value={novoEmail}
                onChange={(e) => setNovoEmail(e.target.value)}
                className={estilos.inputEditavel}
              />
            </label>
            <label>
              Telefone:
              <input
                type="text"
                value={novoTelefone}
                onChange={(e) => setNovoTelefone(e.target.value)}
                className={estilos.inputEditavel}
              />
            </label>
            <div className={estilos.acaoModal}>
              <button className={estilos.botaoSalvar} onClick={handleSalvarEdicao}>
                Salvar
              </button>
              <button
                className={estilos.botaoCancelar}
                onClick={() => setParceiroEdicao(null)}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      {novoParceiroModalAberto && (
        <div className={estilos.modal}>
          <div className={estilos.modalConteudo}>
            <h3>Criar Novo Parceiro</h3>
            <label>
              Nome:
              <input
                type="text"
                value={novoNomeParceiro}
                onChange={(e) => setNovoNomeParceiro(e.target.value)}
                className={estilos.inputEditavel}
              />
            </label>
            <label>
              Tipo:
              <input
                type="text"
                value={novoTipoParceiro}
                onChange={(e) => setNovoTipoParceiro(e.target.value)}
                className={estilos.inputEditavel}
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                value={novoEmailParceiro}
                onChange={(e) => setNovoEmailParceiro(e.target.value)}
                className={estilos.inputEditavel}
              />
            </label>
            <label>
              Telefone:
              <input
                type="text"
                value={novoTelefoneParceiro}
                onChange={(e) => setNovoTelefoneParceiro(e.target.value)}
                className={estilos.inputEditavel}
              />
            </label>
            <div className={estilos.acaoModal}>
              <button
                className={estilos.botaoSalvar}
                onClick={handleAdicionarNovoParceiro}
              >
                Adicionar Parceiro
              </button>
              <button
                className={estilos.botaoCancelar}
                onClick={() => setNovoParceiroModalAberto(false)}
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

export default Parceiros;
