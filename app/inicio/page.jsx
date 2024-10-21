'use client'; // Marcar como Client Component

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../components/AuthContext/page';
import style from './inicio.module.css';
import SecondHeader from '../components/header2/SecondHeader';

export default function Home() {
    const { isAuthenticated } = useAuth(); // Verifica se o usuário está autenticado
    const router = useRouter();

    useEffect(() => {
        if (!isAuthenticated()) {
            router.push('/login'); // Redireciona se não estiver autenticado
        }
    }, [isAuthenticated, router]);

    return (
        <div>
            <SecondHeader />
            <div className={style.page}>
                <div className={style.overlay}>
                    <div className={style.container}>
                        <h1 className={style.text}>Registro de alunos</h1>
                        <img className={style.img} src="alunos.png" alt="icone" />
                    </div>
                    <div className={style.container}>
                        <h1 className={style.text}>AAPM</h1>
                        <img className={style.img} src="AAPM.png" alt="icone" />
                    </div>
                </div>
            </div>
        </div>
    );
}
