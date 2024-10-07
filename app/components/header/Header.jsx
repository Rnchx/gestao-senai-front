import style from "./header.module.css";

const Header = () => {
  return (
    <div className={style.headerContainer}>
      <div className={style.divImg}>
        <img
          src="senaiLogo.png"
          alt="Logo da Empresa"
          className={style.logo}
        />
        
      </div>
    </div>
  );
};

export default Header;






      
  

