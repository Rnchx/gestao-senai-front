import style from './registroAlunos.module.css';
import SecondHeader from '../components/header2/SecondHeader';

export default function Home() {
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
                        <h1 className={style.text}>...</h1>
                        <img className={style.img} src="" alt="icone" />
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