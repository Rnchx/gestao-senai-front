import React, { useState } from 'react';

const Modal = ({ locker, onClose, onAssign, onUnassign }) => {
  const [studentData, setStudentData] = useState({
    name: '',
    class: ''
  });
  const [isAssigning, setIsAssigning] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudentData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAssignSubmit = (e) => {
    e.preventDefault();
    if (studentData.name && studentData.class) {
      console.log('Enviando dados:', locker.id, studentData); // Log para debug
      onAssign(locker.id, studentData);
      setStudentData({ name: '', class: '' });
      setIsAssigning(false);
    }
  };

  const handleUnassignClick = () => {
    if (window.confirm('Tem certeza que deseja desocupar este armário?')) {
      onUnassign(locker.id);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Armário {locker.id}</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex items-center">
            <span className="font-semibold mr-2">Status:</span>
            <span className={`px-2 py-1 rounded-full text-sm ${
              locker.occupationStatus === 'ocupado' 
                ? 'bg-red-100 text-red-800' 
                : 'bg-gray-100 text-gray-800'
            }`}>
              {locker.occupationStatus === 'ocupado' ? 'Ocupado' : 'Vago'}
            </span>
          </div>

          {locker.occupationStatus === 'ocupado' ? (
            <div className="space-y-2">
              <div>
                <span className="font-semibold">Aluno:</span> {locker.owner}
              </div>
              <div>
                <span className="font-semibold">Turma:</span> {locker.ownerClass}
              </div>
              <button
                onClick={handleUnassignClick}
                className="w-full mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition-colors"
              >
                Desocupar
              </button>
            </div>
          ) : (
            <div>
              {!isAssigning ? (
                <button
                  onClick={() => setIsAssigning(true)}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
                >
                  Atribuir
                </button>
              ) : (
                <form onSubmit={handleAssignSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Nome do Aluno
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={studentData.name}
                      onChange={handleInputChange}
                      className="mt-1 w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Turma
                    </label>
                    <input
                      type="text"
                      name="class"
                      value={studentData.class}
                      onChange={handleInputChange}
                      className="mt-1 w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div className="flex space-x-2">
                    <button
                      type="submit"
                      className="flex-1 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors"
                    >
                      Confirmar
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsAssigning(false)}
                      className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 transition-colors"
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