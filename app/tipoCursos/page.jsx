'use client';

import style from './tipoCursos.module.css';
import SecondHeader from '../components/header2/SecondHeader';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../components/authContext/user';

export default function TipoCursos() {
    const { isAuthenticated, authToken } = useAuth();
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        if (authToken === null) {
            const storedToken = localStorage.getItem('authToken');
            if (!storedToken) {
                router.push('/');
            } else {
                setLoading(false);
            }
        } else {
            setLoading(false);
        }
    }, [authToken, router]);

    if (loading) {
        return <p>Carregando...</p>;
    }

    return (
        <div>
            <SecondHeader />
            <div className={style.page}>
                <div className={style.overlay}>
                    <a className={style.linkImage} href="/eachTypeOfCurse/itinerario-formativo">
                        <div className={style.container}>
                            <h1 className={style.text}>Itinerário Formativo</h1>
                            <img className={style.img} src="caca.png" alt="icone" />
                        </div>
                    </a>

                    <a className={style.linkImage} href="/eachTypeOfCurse/tecnico">
                        <div className={style.container}>
                            <h1 className={style.text}>Técnico</h1>
                            <img className={style.img} src="iconeTecnico.png" alt="icone" />
                        </div>
                    </a>

                    <a className={style.linkImage} href="/eachTypeOfCurse/industrial">
                        <div className={style.container}>
                            <h1 className={style.text}>Industrial</h1>
                            <img className={style.img} src="solucao.png" alt="icone" />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}