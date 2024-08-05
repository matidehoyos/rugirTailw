import React, { useState, useEffect } from 'react';
import style from './Alfombras2.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AlfombrasTablet from '../alfombrasTablet/AlfombrasTablet';

const images = [
  './aldo.png',
  './boca1.png',
  './velez.png',
  './racing.png',
  './riber.png',
  './diego.png',
];

function Alfombras2() {
  useEffect(() => {
    AOS.init(); 
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={style.container}>
      <h6>Pedí la de tu equipo</h6>
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

export default Alfombras2;
