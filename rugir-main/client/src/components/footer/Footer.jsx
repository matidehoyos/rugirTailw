import { useEffect } from 'react';
import style from './Footer.module.css'

function Footer() {
  useEffect(() => {
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    });

    return () => {
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        });
      });
    };
  }, []);


  return (
    <div className={style.container}>
        <div className={style.log}>
          <img src="./l.png" alt="logo Rugir" />
        </div>
        <div className={style.menu}>
          <ul>
            <li><a href="#contacto">CONTACTO</a></li>
            <li><a href="#header">HOME</a></li>
          </ul>
        </div>
        <p className={style.dev}>Desarrollado por <a href="https://mododigital.vercel.app" target="_blank" rel="noopener noreferrer"><span className={style.modo}>MODO</span><span className={style.digi}>DIGITAL</span></a></p>
        <p className={style.copy}>© 2024 Rugir Mdq. Todos los derechos reservados.</p> 
    </div>
  )
}

export default Footer