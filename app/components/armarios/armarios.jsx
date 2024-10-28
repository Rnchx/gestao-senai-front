import React from 'react';

const Armario = ({ numero, status, onClick }) => {
  const handleClick = () => {
    onClick(numero);
  };

  const getCor = status === 'ocupado' ? 'red' : 'gray';

  return (
    <div style={{ width: '200px', height: '300px', backgroundColor: getCor, margin: '10px' }}>
      <h3>{numero}</h3>
      <button onClick={handleClick}>Verificar</button>
    </div>
  );
};

export default Armario;