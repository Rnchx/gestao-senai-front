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
            <h2 className={style.h2}>Login</h2>
            <div className={style.inputBox}>
              <form>
                <input placeholder="CPF" type="text" id="cpf" name="cpf" required />
                <input placeholder="Senha" type="password" id="password" name="password" className="password" required />
              </form>
            </div>
            
          </div>
          <button className={style.button} type="submit">Entrar</button>
        </div>
      </div>
    </div>
  );
}