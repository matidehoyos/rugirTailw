import React, { useState, useEffect } from 'react';
import style from './Alfombras3.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AlfombrasTablet from '../alfombrasTablet/AlfombrasTablet';

const images = [
  './tx.png',
  './serie.png',
  './carola.png',
  './pacman.png',
  './simpsom.png',
  './diego.png',
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
      <h6>Con el logo de tu empresa,<br/>personalidades, series,<br/>y mucho más...</h6>
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
