import style from './buttonClasses.module.css'

const ButtonClasses = ({ text, onclick }) => {
  return (
    <button
      className={style.btn}
      onClick={onclick}>
      {text}
    </button>
  )
}

export default ButtonClasses