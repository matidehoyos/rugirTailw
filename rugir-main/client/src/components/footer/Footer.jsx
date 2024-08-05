import style from './Footer.module.css'

function Footer() {
  return (
    <div className={style.container}>
        <div className={style.log}>
          <img src="./l.png" alt="logo Rugir" />
        </div>
        <p className={style.dev}>Desarrollado por <a href="https://mododigital.vercel.app" target="_blank" rel="noopener noreferrer"><span className={style.modo}>MODO</span><span className={style.digi}>DIGITAL</span></a></p>
        <p className={style.copy}>© 2024 Rugir Mdq. Todos los derechos reservados.</p> 
    </div>
  )
}

export default Footer