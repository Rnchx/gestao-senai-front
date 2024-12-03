import style from "./footer.module.css";

const Footer = () => {
    return (
        <div className={style.footerContainer}>
            <div>
                <p className={style.text}>©Todos os direitos reservados</p>
            </div>

            <div className={style.imagem}>
                <img
                    src="Logo.png"
                    alt="Logo da Empresa"
                    className={style.logo}
                />
            </div>
        </div>
    );
};

export default Footer