'use client';

import style from './curse.module.css';
import SecondHeader from '../../components/header2/SecondHeader';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import PrivateRoute from '@/app/components/privateRouter/PrivateRouter';

export default function EachCurse() {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [showFilterStudents, setShowFilterStudents] = useState(false);
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
      const token = localStorage.getItem('authToken');

      if (!token) {
        throw new Error('Token não encontrado');
      }

      const response = await axios.get(url, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      setStudents(response.data.students || response.data);
      setFilteredStudents(response.data.students || response.data);
    } catch (error) {
      console.error(error);
      if (error.message === 'Token não encontrado') {
        setError('Usuário não autenticado');
      } else {
        setError('Erro ao carregar os dados dos estudantes');
      }
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

  const handleShowAapmContributors = () => {
    const aapmContributors = students.filter(student => student.aapmstatus);
    setFilteredStudents(aapmContributors);
    setShowFilterStudents(true);
  };

  const filterByInternshipStatus = (status) => {
    const filteredStudents = students.filter(
      (student) => student.internshipstatus === status
    );
    setFilteredStudents(filteredStudents);
    setShowFilterStudents(false);
  };

  const handleShowAllStudents = () => {
    setFilteredStudents(students);
    setShowFilterStudents(false);
  };

  const filterByAge = () => {
    const currentYear = new Date().getFullYear();
    const eighteenYearOlds = students.filter(
      (student) => currentYear - new Date(student.dateofbirth).getFullYear() === 18
    );
    setFilteredStudents(eighteenYearOlds);
    setShowFilterStudents(false);
  };

  return (
    <PrivateRoute>
      <div>
        <SecondHeader />
        <div className={style.containerFilters}>
          <h1 className={style.titleCourse}> Alunos - {curso}</h1>

          <button
            className={`${style.buttonsFilter} ${!showFilterStudents ? style.activeFilter : ''}`}
            onClick={handleShowAllStudents}>Todos</button>

          <button className={style.buttonsFilter} onClick={filterByAge}>
            18 anos
          </button>

          <button className={style.buttonsFilter} onClick={() => filterByInternshipStatus(true)}>
            Aprendiz
          </button>

          <button className={style.buttonsFilter} onClick={() => filterByInternshipStatus(true)}>
            Estagiário
          </button>

          <button
            className={`${style.buttonsFilter} ${showFilterStudents ? style.activeFilter : ''}`}
            onClick={handleShowAapmContributors}
          >
            Contribuintes AAPM
          </button>
        </div>
        <div className={style.containerCards}>
          {error && <p>{error}</p>}
          <div className={style.alunoContainer}>
            {filteredStudents.length > 0 ? (
              filteredStudents.map((student) => (
                <div key={student.id} className={style.alunoCard}>
                  <img className={style.imageStudent} src={student.carometer} alt="foto do aluno" />
                  <p className={style.nameStudent}><b>{student.name}</b></p>
                </div>
              ))
            ) : (
              <p>Carregando estudantes...</p>
            )}
          </div>
        </div>
      </div>
    </PrivateRoute>
  );
}