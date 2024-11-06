'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Armario from '../components/armarios/armarios';
import Modal from '../components/modal/Modal';

const ArmarioPage = () => {
  const [lockers, setLockers] = useState([]);
  const [selectedLocker, setSelectedLocker] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchLockers();
  }, []);

  const fetchLockers = async () => {
    try {
      const response = await axios.get('/api/lockers');
      setLockers(response.data);
    } catch (error) {
      setError('Erro ao buscar os armários');
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

  const handleAssignLocker = async (studentName) => {
    try {
      await axios.post(`/api/lockers/${selectedLocker.id}/assign`, { studentName });
      fetchLockers();
      handleModalClose();
    } catch (error) {
      setError('Erro ao atribuir o armário');
      console.error(error);
    }
  };

  const handleUnassignLocker = async () => {
    try {
      await axios.post(`/api/lockers/${selectedLocker.id}/unassign`);
      fetchLockers();
      handleModalClose();
    } catch (error) {
      setError('Erro ao desocupar o armário');
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Armários</h1>
      {loading ? (
        <div>Carregando...</div>
      ) : error ? (
        <div>Erro: {error}</div>
      ) : (
        <div>
          {lockers.map((locker) => (
            <ArmarioCard key={locker.id} locker={locker} onClick={handleLockerClick} />
          ))}
        </div>
      )}
      {selectedLocker && (
        <ArmarioModal
          locker={selectedLocker}
          onClose={handleModalClose}
          onAssign={handleAssignLocker}
          onUnassign={handleUnassignLocker}
        />
      )}
    </div>
  );
};

export default ArmarioPage;