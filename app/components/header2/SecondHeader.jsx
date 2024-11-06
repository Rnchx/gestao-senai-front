'use client';

import Image from 'next/image';
import style from './secondHeader.module.css';

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
    </div>
  );
}

export default SecondHeader;