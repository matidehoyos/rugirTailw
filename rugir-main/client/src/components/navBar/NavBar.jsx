import style from './NavBar.module.css'
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function NavBar() {
  useEffect(() => {
    AOS.init(); 
  }, []);

  return (
    <div className={style.container}>
          <div className={style.logo}>
              <h2 data-aos="fade-down">RUGIR</h2>
          </div>
       {/*} <div className={style.menu}>
            <nav>
                    <ul>
                      <li><a href="#">Home</a></li>
                      <li><a href="#about">Nosotros</a></li>
                      <li><a href='#contact'>Contacto</a> </li>
                    </ul>
              </nav>
        </div> 
        <div className={style.redes}>
            <nav>
                    <ul>
                      <li><a href='https://www.instagram.com/rugirmdq/' target="_blank"><FaInstagram /></a> </li>
                      <li><a href="https://api.whatsapp.com/send?phone=542236351363" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a></li>
                    </ul>
              </nav>
        </div>
        */}
    </div>
  )
}

export default NavBar
