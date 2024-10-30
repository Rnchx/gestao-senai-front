'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../components/authContext/user';
import style from './inicio.module.css';
import SecondHeader from '../components/header2/SecondHeader';

export default function Home() {
    const { isAuthenticated } = useAuth();

    const router = useRouter();

    useEffect(() => {
        if (!isAuthenticated()) {
            router.push('/');
        }
    }, [isAuthenticated, router]);

    return (
        <div>
            <SecondHeader />
            <div className={style.page}>
                <div className={style.overlay}>

                    <a className={style.linkContainer} href="../tipoCursos">
                        <div className={style.container}>
                            <h1 className={style.text}>Registro de alunos</h1>
                            <img className={style.img} src="alunos.png" alt="icone" />
                        </div>
                    </a>

                    <a className={style.linkContainer} href="../armarios">
                        <div className={style.container}>
                            <h1 className={style.text}>AAPM</h1>
                            <img className={style.img} src="AAPM.png" alt="icone" />
                        </div>
                    </a>

                </div>
            </div>
        </div>
    );
}
