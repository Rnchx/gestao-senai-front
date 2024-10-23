'use client';

import style from './tipoCursos.module.css';
import SecondHeader from '../components/header2/SecondHeader';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../components/authContext/user';

export default function TipoCursos() {
    const { isAuthenticated, authToken } = useAuth();
    const [loading, setLoading] = useState(true); // Adiciona estado de carregamento
    const router = useRouter();

    useEffect(() => {
        // Esperar o token ser carregado antes de verificar
        if (authToken === null) {
            const storedToken = localStorage.getItem('authToken');
            if (!storedToken) {
                router.push('/');
            } else {
                setLoading(false); // Token existe, carregamento completo
            }
        } else {
            setLoading(false); // Autenticado
        }
    }, [authToken, router]);

    // Mostrar "Carregando..." enquanto verifica o token
    if (loading) {
        return <p>Carregando...</p>;
    }

    return (
        <div>
            <SecondHeader />
            <div className={style.page}>
                <div className={style.overlay}>
                    <div className={style.container}>
                        <h1 className={style.text}>Itinerário formativo</h1>
                        <img className={style.img} src="caca.png" alt="icone" />
                    </div>

                    <div className={style.container}>
                        <h1 className={style.text}>Técnico</h1>
                        <img className={style.img} src="iconeTecnico.png" alt="icone" />
                    </div>

                    <div className={style.container}>
                        <h1 className={style.text}>Industrial</h1>
                        <img className={style.img} src="solucao.png" alt="icone" />
                    </div>
                </div>
            </div>
        </div>
    );
}
