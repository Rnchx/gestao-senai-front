'use client'

import { useState, useEffect } from 'react';
import axios from 'axios';
import Armarios from '../components/armarios/armarios';
import Modal from '../components/modal/Modal';
import style from './page.module.css';

const Armario = () => {
  const [lockers, setLockers] = useState([]);
  const [selectedLocker, setSelectedLocker] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Fetching lockers");
    fetchLockers();
  }, []);

  const fetchLockers = async () => {
    try {
      setLoading(true);
      const response = await axios.get(getLockers); // Replace with your actual API endpoint
      setLockers(response.data.lockers || []);
      setLoading(false);
    } catch (error) {
      console.error('Erro ao buscar armários:', error);
      setLoading(false);
      setLockers([]);
    }
  };


  const openModal = async (id) => {
    try {
      setSelectedLocker(null); // Reset selected locker before fetching new data
      const response = await axios.get(getLockersById);
      setSelectedLocker(response.data.locker); // Update selected locker state
    } catch (error) {
      console.error('Erro ao buscar informações do armário:', error);
    }
  };

  const closeModal = () => setSelectedLocker(null);

  const handleAssign = async (studentName) => {
    try {
      await axios.post(assignStudentToLocker, { studentName });
      fetchLockers();
      closeModal();
    } catch (error) {
      console.error('Erro ao atribuir estudante ao armário:', error);
    }
  };

  const handleUnassign = async (id) => {
    try {
      await axios.post(unassignStudentFromLocker);
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
      {console.log("Rendering lockers:", lockers)}
      {lockers && Array.isArray(lockers) && lockers.length > 0 ? (
        lockers.map((locker) => {
          console.log("Rendering Armarios component", locker);
          return (
            <Armarios
              key={locker.id}
              locker={locker}
              onClick={() => openModal(locker.id)}
            />

            );
          })
        ) : (
          <p>Não há armários disponíveis</p>
        )}
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
