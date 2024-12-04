'use client';

import style from "./footer.module.css";
import Image from 'next/image';

const Footer = () => {
    return (
        <div className={style.footerContainer}>
            <div>
                <p className={style.text}>©Todos os direitos reservados</p>
            </div>

            <div className={style.imagem}>
                <Image
                    src="/Logo.png"
                    alt="Logo da Empresa"
                    height={50}
                    width={150}
                    className={style.logo}
                />
            </div>
        </div>
    );
};

export default Footer