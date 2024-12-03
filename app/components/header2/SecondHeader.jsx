'use client';

import Image from 'next/image';
import style from './secondHeader.module.css';
import { FaHome } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

import { useLogin } from "../../components/login/Login";

const SecondHeader = () => {

  const { logOut } = useLogin();

  const handleLogout = () => {
    logOut();
  };

  return (
    <div className={style.headerContainer}>
      <div className={style.headerContainerButtons}>

        <a className={style.linkPage} href="../../inicio">

          <button className={style.buttonHeader}>
            <p>
              <FaHome />
            </p>
          </button>
        </a>

        <a className={style.linkPage} href="#" onClick={handleLogout}>
          <button className={style.buttonHeader}>
            <p>
              <FiLogOut />
            </p>
          </button>
        </a>
      </div>

      <Image
        src="/Logo.png"
        alt="Logo da Empresa"
        height={150}
        width={300}
        className={style.logo}
      />
      <Image
        src="/Logo.png"
        alt="Logo da Empresa"
        height={150}
        width={300}
        className={style.logo}
      />
      <Image
        src="/Logo.png"
        alt="Logo da Empresa"
        height={150}
        width={300}
        className={style.logo}
      />
      <Image
        src="/Logo.png"
        alt="Logo da Empresa"
        height={150}
        width={300}
        className={style.logo}
      />
      <Image
        src="/Logo.png"
        alt="Logo da Empresa"
        height={150}
        width={300}
        className={style.logo}
      />
      <Image
        src="/Logo.png"
        alt="Logo da Empresa"
        height={150}
        width={300}
        className={style.logo}
      />
      <Image
        src="/Logo.png"
        alt="Logo da Empresa"
        height={150}
        width={300}
        className={style.logo}
      />

    </div>
  );
}

export default SecondHeader;