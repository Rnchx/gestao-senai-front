'use-client';

import styles from './armarios.module.css';

const Armario = ({ id, occupationStatus, onClick }) => {
  


  console.log("id",id);
  console.log("occupationStatus",occupationStatus);
  

  return (
    <div
      className={`${styles.locker} ${occupationStatus ? styles.available : styles.occupied}`} // Verifica e aplica a classe correta
      onClick={onClick}
    >
      {id} {/* Exibe o ID do locker */}
    </div>
  );
};

export default Armario;
