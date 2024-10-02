import style from './secondHeader.module.css';

const SecondHeader = () => {
  return (
      <div className={style.headerContainer}>
        <div className={style.divImg}>
        <img src="Logo.png" alt="Logo da Empresa" height={150} width={300} className={style.logo}/>
        <img src="Logo.png" alt="Logo da Empresa" height={150} width={300} className={style.logo}/>
        <img src="Logo.png" alt="Logo da Empresa" height={150} width={300} className={style.logo}/>
        <img src="Logo.png" alt="Logo da Empresa" height={150} width={300} className={style.logo}/>
        <img src="Logo.png" alt="Logo da Empresa" height={150} width={300} className={style.logo}/>
        <img src="Logo.png" alt="Logo da Empresa" height={150} width={300} className={style.logo}/>
        <img src="Logo.png" alt="Logo da Empresa" height={150} width={300} className={style.logo}/>
        </div>
      </div>
  )
}

export default SecondHeader