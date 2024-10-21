'use client';

import React, { useState } from "react";
import style from './page.module.css';
import Header from "./components/header/Header";
import { useLogin } from "./components/login/page";
import { useRouter } from 'next/navigation';

export default function Login() {
  const { error, isLoading, logIn } = useLogin();
  const router = useRouter();

  const [cpf, setCPF] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const loginSuccess = await logIn(cpf, password);

    if (loginSuccess) {
      router.push('/inicio'); // Redireciona para a página protegida após o login
    }
  };

  return (
    <div>
      <Header />
      <div className={style.page}>
        <div className={style.overlay}>
          <div className={style.loginBox}>
            <h2 className={style.h2}>Login</h2>
            <div className={style.inputBox}>
              <form onSubmit={handleSubmit}>
                <input
                  placeholder="CPF"
                  type="text"
                  id="cpf"
                  name="cpf"
                  required
                  onChange={(e) => setCPF(e.target.value)}
                />
                <input
                  placeholder="Senha"
                  type="password"
                  id="password"
                  name="password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Entrar</button>
              </form>
            </div>
            {error && <p className="error">{error}</p>}
            {isLoading && <p>Carregando...</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
