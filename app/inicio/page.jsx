import style from './inicio.module.css';
import SecondHeader from '../components/header2/SecondHeader';
import Image from 'next/image';

export default function Home() {
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