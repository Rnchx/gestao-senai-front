'use client';
import style from './detailing.module.css';
import SecondHeader from '../components/header2/SecondHeader';
import { useSearchParams } from 'next/navigation';
import { GoArrowLeft } from "react-icons/go";
import PrivateRoute from '@/app/components/privateRouter/PrivateRouter';
import Footer from '../components/footer/Footer';

import { useRouter } from 'next/navigation';

const formatCourseType = (type) => {
    const normalizedType = String(type).trim();

    switch (normalizedType) {
        case 'ItinerarioFormativo':
            return 'Itinerário Formativo';
        case 'ITINERARIOFORMATIVO':
            return 'Itinerário Formativo';
        case 'itinerarioformativo':
            return 'Itinerário Formativo';
        case 'Tecnico':
        case 'TECNICO':
        case 'tecnico':
            return 'Técnico';
        case 'Industrial':
        case 'INDUSTRIAL':
        case 'industrial':
            return 'Industrial';
        default:
            console.log('Caiu no default case com o valor:', normalizedType);
            return type || 'Tipo de curso não especificado';
    }
};

const calculateAge = (birthDate) => {
    if (!birthDate) return '';

    const [day, month, year] = birthDate.split('/').map(Number);
    const birthDateTime = new Date(year, month - 1, day);
    const today = new Date();

    let age = today.getFullYear() - birthDateTime.getFullYear();
    const monthDiff = today.getMonth() - birthDateTime.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateTime.getDate())) {
        age--;
    }

    return age;
};

export default function DetailingStudent() {
    const searchParams = useSearchParams();
    const studentId = searchParams.get('id');
    const studentName = searchParams.get('name');
    const dateOfBirth = searchParams.get('dateofbirth');
    const studentClass = searchParams.get('studentclass');
    const studentCourseType = searchParams.get('coursetype');
    const carometer = searchParams.get('carometer');
    const aapmStatus = String(searchParams.get('aapmstatus')).toLowerCase().trim() === 'true';
    const studentInternShipStatus = String(searchParams.get('internshipstatus')).toLowerCase() === 'true';

    const studentAge = calculateAge(dateOfBirth);

    const router = useRouter();

    const handleGoBack = () => {
        router.back();
    };

    return (
        <PrivateRoute>
            <div>
                <div className={style.cointainer}>
                    <SecondHeader />

                    <button onClick={handleGoBack} className={style.buttonBackPage}>
                        <p>
                            <GoArrowLeft />
                        </p>
                    </button>

                    <div className={style.divCenter}>
                        <div className={style.cardInfo}>
                            <div className={style.divClassRight}>
                                <div className={style.divName}>
                                    <p className={style.textName}><b>{studentName}</b></p>
                                </div>

                                <div className={style.divClass}>
                                    <p>{studentClass}</p>
                                </div>
                            </div>

                            <div className={style.divAge}>
                                <p>{dateOfBirth}</p>
                                <p><b>{studentAge} anos</b></p>
                            </div>
                            <p>{formatCourseType(studentCourseType)}</p>

                            <div className={style.divImage}>
                                <img className={style.imageStudent} src={carometer} alt="foto do aluno" />
                            </div>

                            <div className={style.container2}>
                                <p className={`${style.divStatus} ${aapmStatus ? style.statusTrue : style.statusFalse}`}>
                                    {aapmStatus ? 'participa da AAPM' : 'não participa da AAPM'}
                                </p>

                                <p className={`${style.divStatus} ${studentInternShipStatus ? style.statusTrue : style.statusFalse}`}>
                                    {studentInternShipStatus ? 'disponível para estágio' : 'indisponível para estágio'}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.containerFooter}>
                    <Footer />
                </div>
            </div>
        </PrivateRoute>
    );
}
