import React, { useState } from 'react';

const Modal = ({ numero, status, nome, turma, onClose }) => {
  const [nomeAluno, setNomeAluno] = useState('');
  const [turmaAluna, setTurmaAluna] = useState('');

  const handleDesocupar = async () => {
    try {
      const response = await fetch(`/api/armarios/${numero}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status: 'vago' })
      });

      if (!response.ok) {
        throw new Error('Erro ao desocupar o armário');
      }

      onClose();
    } catch (error) {
      console.error('Erro ao desocupar o armário:', error);
    }
  };

  const handleCadastrar = async () => {
    try {
      const response = await fetch('/api/alunos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nome, turma })
      });

      if (!response.ok) {
        throw new Error('Erro ao cadastrar o aluno');
      }

      onClose();
    } catch (error) {
      console.error('Erro ao cadastrar o aluno:', error);
    }
  };

  return (
    <div className="modal">
      <h2>Informações do Armário {numero}</h2>
      <p>Status: {status}</p>
      <p>Nome: {nome}</p>
      <p>Turma: {turma}</p>
      <button onClick={handleDesocupar}>Desocupar</button>
      <button onClick={handleCadastrar}>Cadastrar</button>
    </div>
  );
};

export default Modal;
