'use client';

import style from './curse.module.css';
import SecondHeader from '../../components/header2/SecondHeader';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

import imagem from "../../../public/AAPM.png"

export default function EachCurse() {
  const [students, setStudents] = useState([]);
  const [error, setError] = useState(null);

  const searchParams = useSearchParams();
  const curso = searchParams.get('curso');

  const apiUrls = {
    'Técnico': process.env.NEXT_PUBLIC_API_GET_STUDENTS_TECNICO,
    'Itinerário Formativo': process.env.NEXT_PUBLIC_API_GET_STUDENTS_FORMATIVO,
    'Industrial': process.env.NEXT_PUBLIC_API_GET_STUDENTS_INDUSTRIAL,
  };

  const fetchStudents = async (url) => {
    try {
      const response = await axios.get(url);
      setStudents(response.data.students || response.data);
    } catch (error) {
      console.error(error);
      setError('Erro ao carregar os dados dos estudantes');
    }
  };

  useEffect(() => {
    const apiUrl = apiUrls[curso];
    if (apiUrl) {
      fetchStudents(apiUrl);
    } else {
      setError('Curso inválido');
    }
  }, [curso]);

  return (
    <div>
      <SecondHeader />
      <img src={imagem} alt="foto teste" />
      <div className={style.containerFilters}>
        <h1 className={style.titleCourse}> Alunos - {curso}</h1>

        <button className={style.buttonsFilter}>18 anos</button>
        <button className={style.buttonsFilter}>Aprendiz</button>  
        <button className={style.buttonsFilter}>Estagiário</button>
          <button className={style.buttonsFilter}>Contribuentes AAPM</button>

      </div>
      <div className={style.containerCards}>
        {error && <p>{error}</p>}
        <div className={style.alunoContainer}>
          {students.length > 0 ? (
            students.map((student) => (
              <div key={student.id} className={style.alunoCard}>
                <img className={style.imageStudent} src={student.carometer} alt="foto do aluno" />
                <p className={style.nameStudent}><b>{student.name}</b></p>
                {/* <p>{student.dateofbirth}</p>
                <p>{student.studentclass}</p>
                <p>{student.coursetype}</p>
                <p>Participante da AAPM: {student.aapmstatus ? "Sim" : "Não"}</p>
                {console.log(student.aapmstatus)}
                <p>Disponível para estágio: {student.internshipstatus ? "Sim" : "Não"}</p>
                {console.log(student.internshipstatus)} */}
              </div>
            ))
          ) : (
            <p>Carregando estudantes...</p>
          )}
        </div>
          </div>
      </div>
  );
}
