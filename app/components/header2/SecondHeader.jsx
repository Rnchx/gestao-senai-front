'use client';

import Image from 'next/image';
import style from './secondHeader.module.css';
import { FaHome } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { useRouter } from 'next/navigation'; // Para navegação programática no Next.js

import { useLogin } from "../../components/login/Login";

const SecondHeader = () => {

  const { logOut } = useLogin();
  const router = useRouter(); // Hook do Next.js para navegação

  const handleLogout = () => {
    logOut();
  };

  const handleAapm = () => {
    router.push('/armarios'); // Navega para a página ArmarioPage
  };

  return (
    <div className={style.headerContainer}>
      <div className={style.headerContainerButtons}>

        <a className={style.linkPage} href="../../inicio">
          <button className={style.buttonHeader}>
            <p className={style.textButton}>
              <FaHome />
            </p>
          </button>
        </a>

        <a className={style.linkPage} href="#" onClick={handleLogout}>
          <button className={style.buttonHeader}>
            <p className={style.textButton}>
              <FiLogOut />
            </p>
          </button>
        </a>

        <button className={style.buttonHeader} onClick={handleAapm}>
          <p className={style.textButton}>
            AAPM
          </p>
        </button>

      </div>

      <Image
        src="/Logo.png"
        alt="Logo da Empresa"
        height={150}
        width={300}
        className={style.logo}
      />

      {[...Array(6)].map((_, index) => (
        <Image
          key={index}
          src="/Logo.png"
          alt={`Logo da Empresa ${index + 1}`}
          height={150}
          width={300}
          className={style.logo}
        />
      ))}

    </div>
  );
}

export default SecondHeader;
