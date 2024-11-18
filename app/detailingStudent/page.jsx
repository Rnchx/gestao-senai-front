'use client';
import style from './detailing.module.css';
import SecondHeader from '../components/header2/SecondHeader';
import { useSearchParams } from 'next/navigation';

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
    const aapmStatus = searchParams.get('aapmstatus');
    const studentInternShipStatus = searchParams.get('internshipstatus');

    const studentAge = calculateAge(dateOfBirth);

    return (
        <div>
            <div className={style.cointainer}>

                <SecondHeader />

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
                        <p>{aapmStatus ? 'Participa da AAPM' : 'Não participa da AAPM'}</p>
                        <p>{studentInternShipStatus ? 'Disponível para estágio' : 'Indisponível para estágio'}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}