import { useEffect } from 'react';
import style from './NavBar.module.css';

function NavBar() {
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
      <div className={style.logo}>
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
  );
}

export default NavBar;
