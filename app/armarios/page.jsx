'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Armario from '../components/armarios/armarios';
import Modal from '../components/modal/Modal';
import PrivateRoute from '../components/privateRouter/PrivateRouter';
import styles from './page.module.css';
import Header from '../components/header/Header';

const ArmarioPage = () => {
  const [lockers, setLockers] = useState([]);
  const [selectedLocker, setSelectedLocker] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [inOrder, setInOrder] = useState(false);

  const API_BASE_URL = "http://10.88.199.163:4000"; // Adicionada constante para a URL base

  useEffect(() => {
    fetchLockers();
  }, []);

  const fetchLockers = async () => {
    const token = localStorage.getItem('authToken');

    if (!token) {
      setError('Token não encontrado');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.get(`${API_BASE_URL}/lockers`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      // Atribui os dados retornados aos armários e loga corretamente
      setLockers(response.data.lockers);

      // Organiza os armários em ordem crescente de ID
      setLockers(response.data.lockers.sort((a, b) => a.id - b.id));
      console.log('Armários recebidos:', response.data.lockers);
      setError(null);
    } catch (error) {
      setError('Erro ao carregar os dados dos armários');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };


  const handleLockerClick = (locker) => {
    setSelectedLocker(locker);
  };

  const handleModalClose = () => {
    setSelectedLocker(null);
  };
  const handleAssignLocker = async (lockerId, owner) => {
    const token = localStorage.getItem('authToken');
    try {
      console.log('Atribuindo armário:', lockerId, owner); // Verificação dos dados enviados
      const response = await axios.post(
        `${API_BASE_URL}/lockers/${lockerId}/assign`,
        {
          owner  // Certifique-se de que o backend espera "owner"
        },
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );
      console.log('Resposta da atribuição:', response.data); // Log para confirmação
      await fetchLockers(); // Atualiza a lista de armários
      handleModalClose();
    } catch (error) {
      console.error('Erro detalhado:', error.response || error); // Log detalhado do erro
      setError(error.response?.data?.message || 'Erro ao atribuir o armário');
    }
  };
  const handleUnassignLocker = async (lockerId) => {
    const token = localStorage.getItem('authToken');
    try {
      await axios.put(
        `${API_BASE_URL}/lockers/${lockerId}/unassign`,
        {},
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );
      await fetchLockers();
      handleModalClose();
    } catch (error) {
      setError('Erro ao desocupar o armário');
      console.error(error);
    }
  };

  return (
    <PrivateRoute>
      <Header/>
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>Armários</h1>
        <div className={styles.legend}>
          <div className={styles.legendItem}>
            <div className={`${styles.legendColor} ${styles.legendAvailable}`}></div>
            Vago
          </div>
          <div className={styles.legendItem}>
            <div className={`${styles.legendColor} ${styles.legendOccupied}`}></div>
            Ocupado
          </div>
        </div>
        {error && (
          <div className={styles.errorMessage}>
            {error}
          </div>
        )}
        {loading ? (
          <div className={styles.loaderContainer}>
            <div className={styles.loader}></div>
          </div>
        ) : lockers && lockers.length > 0 ? (
          <div className={styles.homeGrid}>
            {lockers.map((locker) => (
              <Armario
                key={locker.id}
                id={locker.id}
                occupationStatus={locker.occupationstatus}// Recebe o status do backend
                onClick={() => handleLockerClick(locker)}
              />
            ))}
          </div>
        ) : (
          <div className={styles.noResults}>
            Nenhum armário encontrado.
          </div>
        )}
        {selectedLocker && (
          <Modal
            locker={selectedLocker}
            onClose={handleModalClose}
            onAssign={handleAssignLocker}
            onUnassign={handleUnassignLocker}
          />
        )}
      </div>
    </PrivateRoute>
  );
};

export default ArmarioPage;