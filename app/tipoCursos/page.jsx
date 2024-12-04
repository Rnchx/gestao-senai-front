'use client';

import style from './tipoCursos.module.css';
import SecondHeader from '../components/header2/SecondHeader';
import PrivateRoute from '../components/privateRouter/PrivateRouter';
import Footer from '../components/footer/Footer';

import { GoArrowLeft } from "react-icons/go";

import { useRouter } from 'next/navigation';

// import { useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import { useAuth } from '../components/authContext/user';

export default function TipoCursos() {

    const router = useRouter();

    const handleGoBack = () => {
        router.back();
    };

    return (
        <PrivateRoute>
            <div>
                <SecondHeader />
                <div className={style.page}>
                    <button onClick={handleGoBack} className={style.buttonBackPage}>
                        <p>
                            <GoArrowLeft />
                        </p>
                    </button>

                    <div className={style.overlay}>
                        <a className={style.linkImage} href="/eachTypeOfCurse/itinerario-formativo?curso=Itinerário Formativo">
                            <div className={style.container}>
                                <h1 className={style.text}>Itinerário Formativo</h1>
                                <img className={style.img} src="caca.png" alt="icone" />
                            </div>
                        </a>

                        <a className={style.linkImage} href="/eachTypeOfCurse/tecnico?curso=Técnico">
                            <div className={style.container}>
                                <h1 className={style.text}>Técnico</h1>
                                <img className={style.img} src="iconeTecnico.png" alt="icone" />
                            </div>
                        </a>

                        <a className={style.linkImage} href="/eachTypeOfCurse/industrial?curso=Industrial">
                            <div className={style.container}>
                                <h1 className={style.text}>Industrial</h1>
                                <img className={style.img} src="solucao.png" alt="icone" />
                            </div>
                        </a>
                    </div>
                    <div className={style.containerFooter}>
                        <Footer />
                    </div>
                </div>
            </div>
        </PrivateRoute>
    );
}
