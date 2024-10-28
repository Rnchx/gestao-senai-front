'use client';

import style from './curse.module.css';
import SecondHeader from '../../components/header2/SecondHeader';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function EachCurse() {

  const [students, setStudents] = useState([]);

  // const apiUrlgetAllStudents = process.env.apiUrlGetStudents;
  const apiUrlgetAllStudents = "localhost:4000/students"

  const fetchStudents = async () => {
    try {
      const response = await axios.get(apiUrlgetAllStudents);
      setStudents(response.data.students);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div>
      <SecondHeader />
      <div className={style.page}>
        <h1>{  }</h1>
        <div className={style.alunoContainer}>
          {students.map((student) => (
            <div key={student.id} className={style.alunoCard}>
              <p>Nome: {student.name}</p>
              <p>Data de nascimento: {student.dateOfBirth}</p>
              <p>Classe: {student.studentClass}</p>
              <p>Tipo de curso: {student.courseType}</p>
              <img src={student.carometer} alt="foto do aluno" />
              <p>Participante da AAPM: {student.aapmStatus}</p>
              <p>Disponível para estágio: {student.internshipStatus}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
