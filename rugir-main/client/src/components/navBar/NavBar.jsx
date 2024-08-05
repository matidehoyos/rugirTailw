import style from './NavBar.module.css'
import { FaQuestion } from 'react-icons/fa';


function NavBar() {
  return (
    <div className={style.container}>
        <div className={style.logo}>
                <img src="logo.png" alt="logo rugir" />
                <h2 data-aos="fade-right" data-aos-duration="1000">RUGIR</h2>
        </div>
        <div className={style.menu}>
          <ul>
            <li><a href="#about">Nosotros</a></li>
            <li><a href="#contacto">Contacto</a></li>
            <li><a href="#frec"><FaQuestion  className={style.ico} /></a></li>
          </ul>
        </div>
    </div>
  )
}

export default NavBar