'use client';

import React, { useState } from "react";
import style from './page.module.css';
import Header from "./components/header/Header";
import { useLogin } from "./components/login/Login";
import { useRouter } from 'next/navigation';
import Footer from "./components/footer/Footer";

export default function Login() {
  const { error, isLoading, logIn } = useLogin();
  const router = useRouter();

  const [cpf, setCPF] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginSuccess = await logIn(cpf, password);

    if (loginSuccess) {
      router.push('/inicio');
    }
  };

  return (
    <div className={style.container}>
      <Header />
      <div className={style.page}>
          <div className={style.videoDiv}>
            <video autoPlay loop muted className={style.backVideo}>
              <source src="/fundo3.mp4" type="video/mp4" />
            </video>
          </div>
          <div className={style.loginBox}>
            <div className={style.inputBox}>
              <h2 className={style.h2}>Login</h2>
              <form onSubmit={handleSubmit}>
                <input
                  placeholder="👤  CPF"
                  type="text"
                  id="cpf"
                  name="cpf"
                  required
                  onChange={(e) => setCPF(e.target.value)}
                />
                <input
                  placeholder="🔑  Senha"
                  type="password"
                  id="password"
                  name="password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />

                <div className={style.containerMessage}>
                  {error && <p className={style.messageError}>{error}</p>}
                  {isLoading && <p className={style.messageSucess}>Carregando...</p>}
                </div>
                <button className={style.btn} type="submit">Entrar</button>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
  );
}
