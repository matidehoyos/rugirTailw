import style from './NavBar.module.css'
import { FaQuestion } from 'react-icons/fa';


function NavBar() {
  return (
    <div className={style.container}>
        <div className={style.logo}>
              {/*  <img src="logo.png" alt="logo rugir" data-aos="fade-up" data-aos-duration="1000"/>*/}
                <h2 data-aos="zoom-out" data-aos-duration="1000">RUGIR</h2>
        </div>
        <div className={style.menu}>
          <ul>
            <li><a href="#about">QUIENES SOMOS?</a></li>
            <li><a href="#contacto">CONTACTO</a></li>
            <li><a href="#frec">FAQ</a></li>
          </ul>
        </div>
    </div>
  )
}

export default NavBar