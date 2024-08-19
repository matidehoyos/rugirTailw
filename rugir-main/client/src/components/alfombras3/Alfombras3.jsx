import React, { useState, useEffect } from 'react';
import style from './Alfombras3.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AlfombrasTablet from '../alfombrasTablet/AlfombrasTablet';

const images = [
  './mafalda.png',
  './tx.png',
  './ati.png',
  './carola.png',
  './simpsom.png',
  './diego.png',
  './serie.png',
];

function Alfombras3() {
  useEffect(() => {
    AOS.init(); 
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={style.container}>
      <h6>DEL LOGO DE TU EMPRESA,<br/>PERSONAJES, SERIES,<br/>Y MUCHO MÁS...</h6>
      <img
        src={images[currentIndex]}
        className={style.image}
        alt="Product"
        data-aos="zoom-out" data-aos-duration="1000"
      />
      <div className={style.alfpc}>
            <AlfombrasTablet />
      </div>
    </div>
  );
}

export default Alfombras3;
