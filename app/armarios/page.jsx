'use client'

import { useState, useEffect } from 'react';
import axios from 'axios';
import Locker from '../components/armarios/armarios';
import Modal from '../components/modal/Modal';
import style from './page.module.css';

const Armario = () => {
  const [lockers, setLockers] = useState([]);
  const [selectedLocker, setSelectedLocker] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLockers();
  }, []);

  const fetchLockers = async () => {
    try {
      const response = await axios.get('/api/lockers');
      setLockers(response.data.lockers);
      setLoading(false);
    } catch (error) {
      console.error('Erro ao buscar armários:', error);
    }
  };

  const openModal = async (id) => {
    try {
      const response = await axios.get(`/api/lockers/${id}`);
      setSelectedLocker(response.data.lockers);
    } catch (error) {
      console.error('Erro ao buscar informações do armário:', error);
    }
  };

  const closeModal = () => setSelectedLocker(null);

  const handleAssign = async (id, studentName) => {
    try {
      await axios.post(`/api/lockers/${id}/assign`, { studentName });
      fetchLockers();
      closeModal();
    } catch (error) {
      console.error('Erro ao atribuir estudante ao armário:', error);
    }
  };

  const handleUnassign = async (id) => {
    try {
      await axios.post(`/api/lockers/${id}/unassign`);
      fetchLockers();
      closeModal();
    } catch (error) {
      console.error('Erro ao desocupar o armário:', error);
    }
  };

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="app">
      <header className="header">
        <h1>SENAI</h1>
      </header>
      <div className="locker-container">
        {lockers.map((locker) => (
          <Locker
            key={locker.id}
            locker={locker}
            onClick={() => openModal(locker.id)}
          />
        ))}
      </div>
      {selectedLocker && (
        <Modal
          locker={selectedLocker}
          onClose={closeModal}
          onAssign={handleAssign}
          onUnassign={handleUnassign}
        />
      )}
    </div>
  );
};

export default Armario;