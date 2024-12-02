'use client'
import React, { useState } from 'react';
import styles from './Modal.module.css';

const Modal = ({ locker, onClose, onAssign, onUnassign }) => {
  const [isAssigning, setIsAssigning] = useState(false);
  const [owner, setOwner] = useState('');
  
  
  const handleAssignSubmit = (e) => {
    e.preventDefault();
    if (owner) {
      console.log('Enviando dados para atribuição:', locker.id, owner);
      onAssign(locker.id, owner);  // Passando apenas o nome do aluno
      setIsAssigning(false);
    } else {
      console.log('Erro: Nome do aluno está vazio');
    }
  };

  const handleUnassignClick = () => {
    if (window.confirm('Tem certeza que deseja desocupar este armário?')) {
      console.log('Desocupando armário:', locker.id);
      onUnassign(locker.id);
    }
  };

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContainer}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>Armário {locker.id}</h2>
          <button 
            onClick={onClose}
            className={styles.closeButton}
          >
            ✕
          </button>
        </div>
  
        <div>
          <div>
            <span>Status:</span>
            <span className={`${styles.statusBadge} ${
              locker.occupationstatus === false 
                ? styles.statusOccupied 
                : styles.statusVacant
            }`}>
              {locker.occupationstatus === true ? 'Vago' : 'Ocupado'}
            </span>
          </div>
  
          {locker.occupationstatus === false ? (
            <div>
              <div>
                <span className="font-semibold">Aluno:</span> {locker.owner}
              </div>
              <button
                onClick={handleUnassignClick}
                className={`${styles.actionButton} ${styles.unassignButton}`}
              >
                Desocupar
              </button>
            </div>
          ) : (
            <div>
              {!isAssigning ? (
                <button
                  onClick={() => setIsAssigning(true)}
                  className={`${styles.actionButton} ${styles.assignButton}`}
                >
                  Atribuir aluno
                </button>
              ) : (
                <form onSubmit={handleAssignSubmit} className={styles.form}>
                  <div>
                    <label >
                      Nome do Aluno
                    </label>
                    <input
                      type="text"
                      name="owner"
                      value={owner}
                      onChange={e => setOwner(e.target.value)}
                      className={styles.inputField}
                      required
                    />
                  </div>
                  <div className="flex space-x-2">
                    <button
                      type="submit"
                      className={`${styles.actionButton} ${styles.confirmButton}`}
                    >
                      Confirmar
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsAssigning(false)}
                      className={`${styles.actionButton} ${styles.cancelButton}`}
                    >
                      Cancelar
                    </button>
                    
                  </div>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
       

export default Modal;
