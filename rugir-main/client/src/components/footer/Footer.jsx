import style from './Footer.module.css'

function Footer() {
  return (
    <div className={style.container}>
        <p className={style.copy}>© 2024 Rugir Mdq. Todos los derechos reservados.
        </p> 
        <p className={style.dev}>Sitio desarrollado por <a target='blank' href="https://matiasdehoyos.vercel.app">WeDev</a></p>
    </div>
  )
}

export default Footer