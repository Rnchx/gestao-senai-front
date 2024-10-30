import React, { useState } from 'react';
import style from './modal.module.css'

const Modal = ({ locker, onClose, onAssign, onUnassign }) => {
  const [studentName, setStudentName] = useState('');

  const handleAssignClick = () => {
    if (studentName) {
      onAssign(locker.id, studentName);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Armário {locker.id}</h2>
        {locker.occupationStatus === 'ocupado' ? (
          <>
            <p><strong>Status:</strong> Ocupado</p>
            <p><strong>Nome:</strong> {locker.owner}</p>
            <button onClick={() => onUnassign(locker.id)}>Desocupar</button>
          </>
        ) : (
          <>
            <p><strong>Status:</strong> Vago</p>
            <input
              type="text"
              placeholder="Nome do estudante"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
            />
            <button onClick={handleAssignClick}>Atribuir</button>
          </>
        )}
        <button className="close-button" onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
};

export default Modal;