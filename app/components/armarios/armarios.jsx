'use-client';

import React from 'react';
import style from './armarios.module.css';

const Locker = ({ locker, onClick }) => {
  return (
    <div
      className={`locker ${locker.occupationStatus === 'ocupado' ? 'occupied' : 'available'}`}
      onClick={onClick}
    >
      {locker.id}
    </div>
  );
};

export default Locker;