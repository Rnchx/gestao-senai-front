'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Armario from '../components/armarios/armarios';
import Modal from '../components/modal/Modal';
import PrivateRoute from '../components/privateRouter/PrivateRouter';
import style from './page.module.css'

const ArmarioPage = () => {
  const [lockers, setLockers] = useState([]);
  const [selectedLocker, setSelectedLocker] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchLockers();
  }, []);

  const fetchLockers = async () => {

    const token = localStorage.getItem('authToken');

    if (!token) {
      throw new Error('Token não encontrado');
    }

    try {
      const response = await axios.get("http://10.88.199.205:4000/lockers", {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      setLockers(response.data.lockers);
      console.log(response.data) 
    } catch (error) {
      if (error.message === 'Token não encontrado') {
        setError('Armário não autenticado');
      } else {
        setError('Erro ao carregar os dados dos armários');
      }
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
    <PrivateRoute>
    <div>
      <h1>Armários</h1>
      {loading ? (
        <div>Carregando...</div>
      ) : error ? (
        <div>Erro: {error}</div>
      ) : lockers && lockers.length > 0 ? (
        <div className={style.home}>
          {lockers.map((locker) => (
            <Armario key={locker.id} locker={locker} onClick={handleLockerClick} />
          ))}
        </div>
      ) : (
        <div>Nenhum armário encontrado.</div>
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