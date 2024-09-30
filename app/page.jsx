import React from "react";
import style from './page.module.css';
import Header from "./components/header/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <div className={style.page}>
        <div className={style.overlay}>
          <div className={style.loginBox}>
            <h2>Login</h2>
            <form>
              <label htmlFor="cpf">CPF</label>
              <input type="text" id="cpf" name="cpf" required />
              <label htmlFor="password">Senha</label>
              <input type="password" id="password" name="password" required />
              <button type="submit">Entrar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}