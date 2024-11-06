'use client';

import Image from 'next/image';
import style from './secondHeader.module.css';
import { FaHome } from "react-icons/fa";

const SecondHeader = () => {
  return (
    <div className={style.headerContainer}>
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

      <a className={style.linkPage} href="../../inicio">
        <button className={style.buttonHeader}>
          <p>
            <FaHome />
          </p>
        </button>
      </a>

    </div>
  );
}

export default SecondHeader;