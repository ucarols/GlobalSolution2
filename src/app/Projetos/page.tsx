"use client";

import React, { useState } from 'react';
import estilos from './Projetos.module.css';

const Projetos = () => {
  const [projetos, setProjetos] = useState([
    {
      id: 1,
      titulo: 'Projeto 1',
      autor: 'Caroline',
      publicadoEm: '01/10/2024',
      descricao: 'Descrição do Projeto 1',
      status: 'Em andamento'
    },
    {
      id: 2,
      titulo: 'Projeto 2',
      autor: 'Giulia',
      publicadoEm: '15/11/2024',
      descricao: 'Descrição do Projeto 2',
      status: 'Concluído'
    }
  ]);
  const [novoProjetoModalAberto, setNovoProjetoModalAberto] = useState(false);
  const [projetoEdicao, setProjetoEdicao] = useState(null);
  const [novoTitulo, setNovoTitulo] = useState('');
  const [novoAutor, setNovoAutor] = useState('');
  const [novaData, setNovaData] = useState('');
  const [novaDescricao, setNovaDescricao] = useState('');
  const [novoStatus, setNovoStatus] = useState('Não iniciado');

  const handleEditar = (id) => {
    const projeto = projetos.find((p) => p.id === id);
    if (projeto) {
      setNovoTitulo(projeto.titulo);
      setNovoAutor(projeto.autor);
      setNovaData(projeto.publicadoEm);
      setNovaDescricao(projeto.descricao);
      setNovoStatus(projeto.status);
      setProjetoEdicao(projeto);
    }
  };

  const handleSalvarEdicao = () => {
    const projetosAtualizados = projetos.map((projeto) =>
      projeto.id === projetoEdicao.id
        ? {
            ...projeto,
            titulo: novoTitulo,
            autor: novoAutor,
            publicadoEm: novaData,
            descricao: novaDescricao,
            status: novoStatus
          }
        : projeto
    );
    setProjetos(projetosAtualizados);
    setProjetoEdicao(null);
  };

  const handleAdicionarNovoProjeto = () => {
    const novoProjeto = {
      id: projetos.length + 1,
      titulo: novoTitulo,
      autor: novoAutor,
      publicadoEm: novaData,
      descricao: novaDescricao,
      status: novoStatus
    };
    setProjetos([...projetos, novoProjeto]);
    setNovoProjetoModalAberto(false);
  };

  return (
    <section className={estilos.projetos}>
      <div className={estilos.cabecalho}>
        <h2>Meus Projetos</h2>
        <button
          className={estilos.botaoNovoProjeto}
          onClick={() => setNovoProjetoModalAberto(true)}
        >
          Novo Projeto
        </button>
      </div>

      <div className={estilos.listaProjetos}>
        {projetos.map((projeto) => (
          <div key={projeto.id} className={estilos.cardProjeto}>
            <div className={estilos.infoProjeto}>
              <h3 className={estilos.tituloProjeto}>{projeto.titulo}</h3>
              <p className={estilos.autorProjeto}>
                <strong>Autor:</strong> {projeto.autor}
              </p>
              <p className={estilos.dataProjeto}>
                <strong>Publicado em:</strong> {projeto.publicadoEm}
              </p>
              <p className={estilos.descricaoProjeto}>
                <strong>Descrição:</strong> {projeto.descricao}
              </p>
              <p className={estilos.statusProjeto}>
                <strong>Status:</strong> {projeto.status}
              </p>
            </div>
            <div className={estilos.acaoProjeto}>
              <button
                className={estilos.botaoEditar}
                onClick={() => handleEditar(projeto.id)}
              >
                <img
                  src="/edit.png"
                  alt="Editar"
                  className={estilos.iconeEditar}
                />
              </button>
            </div>
          </div>
        ))}
      </div>

      {projetoEdicao && (
        <div className={estilos.modal}>
          <div className={estilos.modalConteudo}>
            <h3>Editar Projeto</h3>
            <label>
              Título:
              <input
                type="text"
                value={novoTitulo}
                onChange={(e) => setNovoTitulo(e.target.value)}
                className={estilos.inputEditavel}
              />
            </label>
            <label>
              Autor:
              <input
                type="text"
                value={novoAutor}
                onChange={(e) => setNovoAutor(e.target.value)}
                className={estilos.inputEditavel}
              />
            </label>
            <label>
              Data de Publicação:
              <input
                type="text"
                value={novaData}
                onChange={(e) => setNovaData(e.target.value)}
                className={estilos.inputEditavel}
              />
            </label>
            <label>
              Descrição:
              <textarea
                value={novaDescricao}
                onChange={(e) => setNovaDescricao(e.target.value)}
                className={estilos.inputEditavel}
              />
            </label>
            <label>
              Status:
              <select
                value={novoStatus}
                onChange={(e) => setNovoStatus(e.target.value)}
                className={estilos.inputEditavel}
              >
                <option value="Não iniciado">Não iniciado</option>
                <option value="Em andamento">Em andamento</option>
                <option value="Concluído">Concluído</option>
              </select>
            </label>
            <div className={estilos.acaoModal}>
              <button
                className={estilos.botaoSalvar}
                onClick={handleSalvarEdicao}
              >
                Salvar
              </button>
              <button
                className={estilos.botaoCancelar}
                onClick={() => setProjetoEdicao(null)}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      {novoProjetoModalAberto && (
        <div className={estilos.modal}>
          <div className={estilos.modalConteudo}>
            <h3>Criar Novo Projeto</h3>
            <label>
              Título:
              <input
                type="text"
                value={novoTitulo}
                onChange={(e) => setNovoTitulo(e.target.value)}
                className={estilos.inputEditavel}
              />
            </label>
            <label>
              Autor:
              <input
                type="text"
                value={novoAutor}
                onChange={(e) => setNovoAutor(e.target.value)}
                className={estilos.inputEditavel}
              />
            </label>
            <label>
              Data de Publicação:
              <input
                type="text"
                value={novaData}
                onChange={(e) => setNovaData(e.target.value)}
                className={estilos.inputEditavel}
              />
            </label>
            <label>
              Descrição:
              <textarea
                value={novaDescricao}
                onChange={(e) => setNovaDescricao(e.target.value)}
                className={estilos.inputEditavel}
              />
            </label>
            <label>
              Status:
              <select
                value={novoStatus}
                onChange={(e) => setNovoStatus(e.target.value)}
                className={estilos.inputEditavel}
              >
                <option value="Não iniciado">Não iniciado</option>
                <option value="Em andamento">Em andamento</option>
                <option value="Concluído">Concluído</option>
              </select>
            </label>
            <div className={estilos.acaoModal}>
              <button
                className={estilos.botaoSalvar}
                onClick={handleAdicionarNovoProjeto}
              >
                Adicionar
              </button>
              <button
                className={estilos.botaoCancelar}
                onClick={() => setNovoProjetoModalAberto(false)}
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

export default Projetos;
