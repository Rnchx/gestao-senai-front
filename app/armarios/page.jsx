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

  const API_BASE_URL = "http://10.88.199.160:4000"; // Adicionada constante para a URL base

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
      setLockers(response.data.lockers);
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
  const handleAssignLocker = async (lockerId, studentData) => {
    const token = localStorage.getItem('authToken');
    try {
      console.log('Atribuindo armário:', lockerId, studentData); // Verificação dos dados enviados
      const response = await axios.post(
        `${API_BASE_URL}/lockers/${lockerId}/assign`,
        {
          owner: studentData.owner  // Certifique-se de que o backend espera "owner"
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
      await axios.post(
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
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Armários</h1>
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
          </div>
        ) : lockers && lockers.length > 0 ? (
          <div className={style.home}>
            {lockers.map((locker) => (
              <Armario
                key={locker.id}
                locker={locker}
                onClick={() => handleLockerClick(locker)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-600">
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